import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import useToggle from '../../hooks/useToggle'
import { UPDATE_CREATOR_STAGE_NAME } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import './EditStageName.css';

const EditStageName = ({ curBio }) => {
	// MODAL TOGGLE
  const [ show, toggleShow ] = useToggle(false);

	const [ formState, setFormState ] = useState(curBio);
	// MUTATION ON FORM SUBMIT
	const [ updateCreatorStageName ] = useMutation(UPDATE_CREATOR_STAGE_NAME);

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
			const mutationResponse = await updateCreatorStageName({
				variables : {
					stageName : formState
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
		<React.Fragment>
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

export default EditStageName;
