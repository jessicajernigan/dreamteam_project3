import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_BIO } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditBio.css';

const EditBio = ({curBio}) => {
	// MODAL FLAG
	const [ show, setShow ] = useState(false);
	const [ formState, setFormState ] = useState(curBio);

	// MUTATION ON FORM SUBMIT
	const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO);

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

	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();
		console.log('bio form submitted');
		// handle signup auth
		const mutationResponse = await updateCreatorBio({
			variables : {
				bio : formState
			}
		});
		console.log('mutationResponse', mutationResponse);
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
