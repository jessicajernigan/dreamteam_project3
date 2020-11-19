import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPLOAD_PHOTO } from '../../utils/mutations';
import { useToggle } from '../../hooks';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditPhoto.css';
import spinner from '../../assets/loading-spinner.gif';

const EditPhoto = () => {
	// MODAL TOGGLE
	const [ show, toggleShow ] = useToggle(false);

	const handleClose = () => toggleShow();
	const handleShow = () => toggleShow();

	const [ uploadPhoto, { loading } ] = useMutation(UPLOAD_PHOTO);

	const handleFileUpload = async (e) => {
		console.log('photo file received');
		e.preventDefault();
		var files = document.getElementById('photoupload').files;

		// console.log('target: ', e.target)

		handleClose();

		const file = files[0];

		try {
			const mutationResponse = await uploadPhoto({
				variables : {
					file
				}
			});
			console.log('mutationResponse', mutationResponse);

			// reload window until cache update works to cause rerender with updated data
			// window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
    {loading ? <img src={spinner} alt="loading" /> : null}
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
					<Form className="m-2" onSubmit={handleFileUpload}>
						<Form.Group>
							<Form.File className="text-center" id="photoupload" />
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

export default EditPhoto;
