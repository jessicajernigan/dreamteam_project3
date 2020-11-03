import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { useToggle, useInputState } from '../../hooks';
import { UPDATE_CREATOR_LOCATION } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditLoc.css';

const EditLoc = ({ curLoc }) => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false);

	const [ location, setLocation ] = useInputState(curLoc);

	// MUTATION ON FORM SUBMIT
	const [ updateCreatorLocation ] = useMutation(UPDATE_CREATOR_LOCATION);

	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();

		// update database with new location
		try {
			const mutationResponse = await updateCreatorLocation({
				variables : {
					location
				}
			});
			console.log('mutationResponse', mutationResponse);

			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	// MODAL DISPLAY
	const handleClose = () => toggleShow();
	const handleShow = () => toggleShow();

	return (
		<>
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
							onChange={setLocation}
							value={location}
							placeholder={curLoc}
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
		</>
	);
};

export default EditLoc;
