import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './EditVibes.css';

const EditVibes = ({ curVibes }) => {
  console.log("curVibes: ", curVibes)

  const testVibes = ['Rock', 'Jazz', 'Blues']


	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

	const allVibes = [
		'Rock',
		'Hip Hop',
		'Reggae',
		'Jazz',
		'Country',
		'Disco',
		'Blues'
	];

	return (
		<React.Fragment>
			<Button
				className="w-50 btn-sm bskr-btn-purple"
				variant="primary"
				onClick={handleShow}
			>
				edit your vibes
			</Button>

			<Modal
				className="EditTunesModal"
				centered
				show={show}
				onHide={handleClose}
				animation={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>edit your vibes</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group>
							{/* <Form.Control as="select" multiple>
                <option>Rock</option>
                <option>Hip Hop</option>
                <option>Reggae</option>
                <option>Jazz</option>
                <option>Blues</option>
              </Form.Control> */}
								{allVibes.map((vibe) => (
									<div key={vibe} className="mb-3">
										<Form.Check type="checkbox" label={vibe} defaultChecked={curVibes?.includes(vibe)} />
										{/* <Form.Check type="checkbox" label={vibe} defaultChecked={testVibes.includes(vibe)} /> */}
									</div>
								))}
						</Form.Group>
						<Button
							variant="primary btn-sm bskr-btn-purple"
							onClick={handleClose}
						>
							save
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</React.Fragment>
	);
};

export default EditVibes;
