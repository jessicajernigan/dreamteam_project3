import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_IMG } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import  AWSService  from '../../utils/AWS.js';

import './EditPhoto.css'

const EditPhoto = ({curCreatr}) => {

    // console.log('new curCreatr without photo', curCreatr)  
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ updateCreatorImg ] = useMutation(UPDATE_CREATOR_IMG);

    // add photo to s3
    async function addPhotoS3(username) {
      // console.log('addPhotoS3 running')
      var files = document.getElementById("photoupload").files;

      if (!files.length) {
        return alert("Please choose a file to upload first.");
      }
      var file = files[0];
      var fileName = file.name;
      var CreatrPhotoKey = encodeURIComponent(username) + "/";
      var photoKey = CreatrPhotoKey + fileName;

      // Use S3 ManagedUpload class as it supports multipart uploads
      var uploadPromise = await AWSService.upload(photoKey, file).promise()
      .then(

        async function (data) {
          console.log('inside .then')
          // alert("Successfully uploaded photo.");
          console.log('data from s3 after successful upload', data) 

          const cloudfrontUrlPrefix = 'http://d28dtfvuvlqgls.cloudfront.net/'
          
          const newImgUrl = `${cloudfrontUrlPrefix}${data.Key}`
          console.log('newImgUrl: ', newImgUrl)

          try {
            const mutationResponse = await updateCreatorImg({
              variables : {
                imgUrl : newImgUrl
              }
            });
  
            const updatedCreatr = mutationResponse.data.updateCreatorImg;
      
            window.location.reload()

          } catch (err) {
            console.error(err);
          }
        },
        function (err) {
          return alert("There was an error uploading your photo: ", err.message);
        }
      );
    }

    const handleFileUpload = async (e) => {
      e.preventDefault()
      handleClose()
      if (curCreatr.imgUrl) {

        const photoKey = curCreatr.imgUrl.slice(curCreatr.imgUrl.indexOf(curCreatr.username))

        AWSService.delete(photoKey);

      }

      addPhotoS3(curCreatr.username)

    }

    return (
      
        <React.Fragment>
        <Button className="w-50 btn-sm bskr-btn-purple" variant="primary" onClick={handleShow}>
          edit profile photo
        </Button>
  
        <Modal className="EditPhotoModal" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>edit your profile photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="m-2" onSubmit={handleFileUpload}>
                <Form.Group>
                    <Form.File id="photoupload" />
                </Form.Group>
            <Button variant="primary btn-sm bskr-btn-purple" type='submit'>
              save
            </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
  
  export default EditPhoto
