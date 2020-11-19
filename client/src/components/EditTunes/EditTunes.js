import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPLOAD_TUNE } from '../../utils/mutations';
import { useToggle } from '../../hooks';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditTunes.css';
import spinner from '../../assets/loading-spinner.gif';

const EditTunes = () => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false);

	const handleClose = () => toggleShow();
	const handleShow = () => toggleShow();

	const [ uploadTune, { loading } ] = useMutation(UPLOAD_TUNE);

	const handleFileUpload = async (e) => {
		e.preventDefault();
		var files = document.getElementById('tunesupload').files;

		// console.log('target: ', e.target)

		handleClose();

		const file = files[0];

		try {
			const mutationResponse= await uploadTune({
				variables : {
					file
				}
			});

		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
      {loading ? <img src={spinner} alt="loading" /> : null}
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
					<Form className="m-2" onSubmit={handleFileUpload}>
						<Form.Group>
							<Form.File className="text-center" id="tunesupload" />
						</Form.Group>
						<Button type="submit" variant="primary btn-sm bskr-btn-purple">
							save
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditTunes;
