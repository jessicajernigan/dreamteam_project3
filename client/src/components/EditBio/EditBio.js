import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

import { UPDATE_CREATOR_BIO } from '../../utils/mutations';
import { QUERY_CREATORS } from '../../utils/queries';
import { updateCreatorBio as updateCreatorBioRedux } from '../../utils/actions';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditBio.css';

const EditBio = ({ curBio }) => {
	// MODAL FLAG
	const [ show, setShow ] = useState(false);

	const [ formState, setFormState ] = useState(curBio);

	const dispatch = useDispatch();

	// const { refetch } = useQuery(QUERY_CREATORS)
	// MUTATION ON FORM SUBMIT
	// const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO);
	const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO, {
		update(cache, { data: { updateCreatorBio } }) {
      const { creators } = cache.readQuery({ query: QUERY_CREATORS });
      
      console.log('creators before : ', creators)

      if (creators) {
        for (var i of creators) {
          if (creators[i]?.bio === curBio) {
            creators[i].bio = formState
          }
        }
        
        console.log('creators after : ', creators)
      }

			cache.writeQuery({
				query : QUERY_CREATORS,
				// data: { creators: [ ...creators, updateCreatorBio ]}
				data  : { creators: creators }
			});
		}
		//   refetchQueries: [{query: QUERY_CREATORS }],
	});

	// see module lesson 21.6.5 re Apollo caching
	// also https://www.apollographql.com/docs/react/data/mutations/#updating-the-cache-after-a-mutation

	// initialize form state from props
	useEffect(
		() => {
			setFormState(curBio);
		},
		[ curBio ]
	);

	const handleChange = (e) => {
		setFormState(e.target.value);
	};

	// currently this is successfully mutating the data in db but not causing re-render in parent CreatrDash component to reflect the update.  new dispatch?
	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();

		// try/catch?
		try {
			const mutationResponse = await updateCreatorBio({
				variables : {
					bio : formState
				}
				// refetchQueries: [ { query: QUERY_CREATORS } ]
			});
			// refetch()
			// console.log('mutationResponse', mutationResponse);
			// console.log('updated creatr: ', mutationResponse.data.updateCreatorBio);
			const updatedCreatr = mutationResponse.data.updateCreatorBio;

			// window.location.reload()
			// dispatch(updateCreatorBioRedux(updatedCreatr));
		} catch (err) {
			console.error(err);
		}
	};

	// MODAL DISPLAY
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
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
					<Modal.Title>Please update your bio</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						<FormControl
							name="bio"
							rows="5"
							as="textarea"
							aria-label="With textarea"
							onChange={handleChange}
							value={formState}
							placeholder={formState}
						/>
						<Button
							type="submit"
							variant="primary btn-sm bskr-btn-purple"
							// onClick={handleClose}
						>
							save
						</Button>
					</Form>
				</Modal.Body>
				{/* <Modal.Footer>
          </Modal.Footer> */}
			</Modal>
		</React.Fragment>
	);
};

export default EditBio;
