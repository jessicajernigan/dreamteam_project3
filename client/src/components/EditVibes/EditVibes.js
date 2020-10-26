import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import './EditVibes.css'

const EditVibes = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button className="w-50 btn-sm bskr-btn-purple" variant="primary" onClick={handleShow}>
          edit your vibes
        </Button>
  
        <Modal className="EditTunesModal" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>edit your vibes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control as="select" multiple>
                <option>Rock</option>
                <option>Hip Hop</option>
                <option>Reggae</option>
                <option>Jazz</option>
                <option>Blues</option>
              </Form.Control>
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
  
  export default EditVibes