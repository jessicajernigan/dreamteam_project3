import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_LOCATION } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditLoc.css';

const EditLoc = ({ curBio }) => {
	// MODAL FLAG
	const [ show, setShow ] = useState(false);

	const [ formState, setFormState ] = useState(curBio);
	// MUTATION ON FORM SUBMIT
	const [ updateCreatorLocation ] = useMutation(UPDATE_CREATOR_LOCATION);

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

		try {
			const mutationResponse = await updateCreatorLocation({
				variables : {
					location : formState
				}
			});
			console.log('mutationResponse', mutationResponse);

			window.location.reload();
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
				className="EditLoc-Btn p-2 w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit your location
			</Button>

			<Modal
				className="EditLoc "
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						edit your location{' '}
						<span className="city-span">(e.g. Austin, TX)</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						<FormControl
							name="loc"
							aria-label="With input"
							onChange={handleChange}
							value={formState}
							placeholder={formState}
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

export default EditLoc;
