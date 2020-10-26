import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import './EditBio.css'

const EditBio = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button className="w-50 btn-sm bskr-btn-purple" variant="primary" onClick={handleShow}>
          edit your bio
        </Button>
  
        <Modal className="EditBioModal" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>edit your biography</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
                <FormControl rows="5" as="textarea" aria-label="With textarea" />
            </InputGroup>
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
  
  export default EditBio