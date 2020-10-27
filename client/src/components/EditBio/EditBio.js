import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks'

import { UPDATE_CREATOR_BIO } from '../../utils/mutations'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import './EditBio.css'

const EditBio = () => {
    // MODAL FLAG
    const [show, setShow] = useState(false);
    // FORM CONTROLLED COMPONENT -- bring in bio initial state from redux or apollo
    const [ formState, setFormState ] = useState("please enter your bio");

    // MUTATION ON FORM SUBMIT
    const [ updateCreatorBio ] = useMutation(UPDATE_CREATOR_BIO)

    const handleChange = (e) => {
      setFormState(e.target.value)
    }

    const handleFormSubmit = async (e) => {
      e.preventDefault();
      // handle signup auth
      const mutationResponse = await updateCreatorBio({
        variables : {
          bio : formState
        }
      });
      console.log("mutationResponse", mutationResponse );
    }

    // MODAL DISPLAY
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
                <FormControl name="bio" rows="5" as="textarea" aria-label="With textarea" onChange={handleChange} value={formState} />
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