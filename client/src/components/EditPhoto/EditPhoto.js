import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import './EditPhoto.css'

const EditPhoto = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button className="w-75 btn-sm bskr-btn-purple" variant="primary" onClick={handleShow}>
          edit profile photo
        </Button>
  
        <Modal className="EditPhotoModal" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>edit your profile photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="m-2">
                <Form.Group>
                    <Form.File id="PhotoUpload" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary btn-sm bskr-btn-purple" onClick={handleClose}>
              save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
  
  export default EditPhoto