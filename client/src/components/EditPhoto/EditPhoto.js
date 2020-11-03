import React, { useState } from 'react';

import useToggle from '../../hooks/useToggle';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditPhoto.css';

const EditPhoto = () => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false);

	const handleClose = () => toggleShow();
	const handleShow = () => toggleShow();

	return (
		<React.Fragment>
			<Button
				className="w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit profile photo
			</Button>

			<Modal
				className="EditPhotoModal"
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your profile photo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="m-2">
						<Form.Group>
							<Form.File className="text-center" id="PhotoUpload" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary btn-sm bskr-btn-purple"
						onClick={handleClose}
					>
						save
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default EditPhoto;
