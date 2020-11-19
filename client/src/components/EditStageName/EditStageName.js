import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { useToggle, useInputState } from '../../hooks';
import { UPDATE_CREATOR_STAGE_NAME } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditStageName.css';

const EditStageName = ({ curStageName }) => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false);

	const [ stageName, setStageName ] = useInputState(curStageName);

	// DESTRUCTURE MUTATION FUNCTION FOR USE ON FORM SUBMIT
	const [ updateCreatorStageName ] = useMutation(UPDATE_CREATOR_STAGE_NAME);

	const handleFormSubmit = async (e) => {
		// close modal
		handleClose();
		e.preventDefault();

		try {
			const mutationResponse = await updateCreatorStageName({
				variables : {
					stageName
				}
			});
			console.log('mutationResponse', mutationResponse);

			// window.location.reload();
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
				className="EditStageName-Btn p-2 w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit stage name
			</Button>

			<Modal
				className="EditStageName "
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your stage name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleFormSubmit}>
						<FormControl
							name="loc"
							aria-label="With input"
							onChange={setStageName}
							value={stageName || ''}
							placeholder={curStageName}
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

export default EditStageName;
