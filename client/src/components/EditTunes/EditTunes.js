import React, { useState } from 'react';

import useToggle from '../../hooks/useToggle'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditTunes.css';

const EditTunes = () => {
	// MODAL TOGGLE
  const [ show, toggleShow ] = useToggle(false);

	const handleClose = () => toggleShow();
  const handleShow = () => toggleShow();
  
	return (
		<React.Fragment>
			<Button
				className="w-50 btn-sm mb-5 bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit your tunes
			</Button>

			<Modal
				className="EditTunesModal"
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your tunes</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="m-2">
						<Form.Group>
							<Form.File className="text-center" id="TunesUpload" />
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

export default EditTunes;
