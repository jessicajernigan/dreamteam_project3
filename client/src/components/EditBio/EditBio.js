import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { useToggle, useInputState } from '../../hooks'
// import useInputState from '../../hooks/useInputState'
import { UPDATE_CREATOR_BIO } from '../../utils/mutations';

// import { QUERY_CREATORS } from '../../utils/queries';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditBio.css';

// this component is successfully mutating the db, but is not able to refresh view in parent CreatrDash with updated data.  Currently this is being handled by reloading the page which is not an optimal solution, obviously.  Our first solution should be to update the Apollo cache in a way which will cause a rerender of the parent.  Failing this, we may try dispatching an action creator to update the Redux store.  Trial code for each option is in place but not currently working due to issues with constructing the data to insert in a way that integrates into the existing data structure, being mindful of immutability concerns in Redux.  All other form components on the CreatrDash have the same issue.

const EditBio = ({ curBio }) => {
	// MODAL TOGGLE
  const [ show, toggleShow ] = useToggle(false);

	const [ bio, setBio ] = useInputState(curBio);

	// MUTATION ON FORM SUBMIT
	const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO);
	// need to update apollo cache after successful mutation so view in parent is rerendered based on updated data from this child
	// const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO, {
	//   update(cache, { data: { updateCreatorBio } }) {
	//     const { creators } = cache.readQuery({ query: QUERY_CREATORS })
	//     cache.writeQuery({
	//       query: QUERY_CREATORS,
	//       // how to insert updated creator object into creators array?
	//       data: { creators: [ ...creators, updateCreatorBio ]}
	//     })
	//   }
	// });

	// currently this is successfully mutating the data in db but not causing re-render in parent CreatrDash component to reflect the update.  new dispatch?
	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();

		try {
			const mutationResponse = await updateCreatorBio({
				variables : {
					bio
				}
			});
			// const updatedCreatr = mutationResponse.data.updateCreatorBio;
			console.log('mutationResponse', mutationResponse);

			// reload window until cache update works to cause rerender with updated data
			window.location.reload();
			// dispatch(updateCreatorBioRedux(updatedCreatr));
		} catch (err) {
			console.error(err);
		}
	};

	// MODAL DISPLAY
	const handleClose = () => toggleShow();
	const handleShow = () => toggleShow();

	return (
		<React.Fragment>
			<Button
				className="w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit your bio
			</Button>

			<Modal
				className="EditBio "
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
							name="bio"
							rows="5"
							as="textarea"
							aria-label="With textarea"
							onChange={setBio}
							value={bio}
							placeholder={curBio}
						/>
						<Button
							className="mt-3"
							type="submit"
							variant="primary btn-sm bskr-btn-purple"
						>
							save
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default EditBio;
