import React, { useEffect } from 'react' // useEffect for testing only
import { useQuery, useMutation } from '@apollo/react-hooks' // useQuery for testing only

import { useToggle, useInputState } from '../../hooks'
import { UPDATE_CREATOR_BIO } from '../../utils/mutations'

import { QUERY_CREATORS } from '../../utils/queries' // for testing only

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import './EditBio.css'

// this component is successfully mutating the db, but is not able to refresh view in parent CreatrDash with updated data.  Currently this is being handled by reloading the page which is not an optimal solution, obviously.  Our first solution should be to update the Apollo cache in a way which will cause a rerender of the parent.  Failing this, we may try dispatching an action creator to update the Redux store.  Trial code for each option is in place but not currently working due to issues with constructing the data to insert in a way that integrates into the existing data structure, being mindful of immutability concerns in Redux.  All other form components on the CreatrDash have the same issue.

const EditBio = ({ curId, curBio }) => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false)
	// custom hook for controlling form
	const [ bio, setBio ] = useInputState(curBio)

	// // FOR TESTING ONLY *******************************
  // const { loading, data } = useQuery(QUERY_CREATORS) // test
	// useEffect(
	// 	() => {
  //     // shows creators before mutation
  //     // console.log('creators before mutation: ', data)
	// 	},
	// 	[ data ]
	// )
	// // FOR TESTING ONLY *******************************

	// MUTATION ON FORM SUBMIT
  const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO);
 
  // *********************************************************************
  // NOTE...re-rendering works in CreatrDash using this mutation above (without having to update the cache!).  the thing that was blocking it was that in CreatrDash, the Redux store was the first value being checked in the useEffect, so the Apollo query was not being made if there was something already in the store.  I removed the if block that checks the redux creator.length and refactored to use the results of the apollo query to set the current creator.  need to go back over module and see why they were using the redux check in the first place to determine if this is a stable solution. 
  // *********************************************************************



	// need to update apollo cache after successful mutation so view in parent is rerendered based on updated data from this child
	// const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO, {
	// 	update(cache, { data: { updateCreatorBio } }) {
	// 		const { creators } = cache.readQuery({ query: QUERY_CREATORS })
	// 		console.log('creators from cache in update: ', creators) // shows updated curCreatr.bio from cache, so why is it not rendering in CreatrDash?  could it be because the first if() clause in the useEffect is checking Redux store before the apollo query is run?
	// 		// get curBio._id from CreatrDash.  create new array of creators, replacing creator with matching id with updatedCreatorBio
	// 		// const updatedCreators = [ ]
	// 		cache.writeQuery({
	// 			query : QUERY_CREATORS,
	// 			// how to insert updated creator object into creators array?
	// 			data  : { creators: [ ...creators ] }
	// 		})
	// 	}
	// })

	// currently this is successfully mutating the data in db but not causing re-render in parent CreatrDash component to reflect the update.  new dispatch?
	const handleFormSubmit = async (e) => {
		// close modal
		handleClose()
		e.preventDefault()

		try {
			const mutationResponse = await updateCreatorBio({
				variables : {
					bio
				}
			})
			// const updatedCreatr = mutationResponse.data.updateCreatorBio;
			console.log('mutationResponse', mutationResponse)

			// reload window until cache update works to cause rerender with updated data
			// window.location.reload();
			// dispatch(updateCreatorBioRedux(updatedCreatr));
		} catch (err) {
			console.error(err)
		}
	}

	// MODAL DISPLAY
	const handleClose = () => toggleShow()
	const handleShow = () => toggleShow()

	return (
		<React.Fragment>
			<Button
				className='w-50 btn-sm bskr-btn-purple'
				variant='primary'
				onClick={handleShow}
			>
				edit your bio
			</Button>

			<Modal
				className='EditBio '
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your bio</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						<FormControl
							name='bio'
							rows='5'
							as='textarea'
							aria-label='With textarea'
							onChange={setBio}
							value={bio || ''}
							placeholder={curBio}
						/>
						<Button
							className='mt-3'
							type='submit'
							variant='primary btn-sm bskr-btn-purple'
						>
							save
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	)
}

export default EditBio
