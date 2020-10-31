import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_TUNE } from '../../utils/mutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import './EditTunes.css'

import AWS from 'aws-sdk'
// const AWS = require('aws-sdk')

const bucketName = 'buskr-data'

console.log("bucketName", bucketName)
// const bucketRegion = process.env.BUCKET_REGION;
const bucketRegion = 'us-east-2'
const poolId = 'us-east-2:26947c37-5bb0-4ae6-b4a5-4ed2a9275c9f'

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: poolId
  })
});
const s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});



const EditTunes = ({curCreatr}) => {
  // MODAL
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ updateCreatorTune ] = useMutation(UPDATE_CREATOR_TUNE);


  async function addSongsS3(username) {
    var files = document.getElementById("tuneupload").files;
    if (!files.length) {
      return alert("Please choose a file to upload first.");
    }
    var file = files[0];
    var fileName = file.name;
    var CreatrTuneKey = encodeURIComponent(username) + "/";
    var tuneKey = CreatrTuneKey + fileName;
    // Use S3 ManagedUpload class as it supports multipart uploads
    var upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: bucketName,
        Key: tuneKey,
        Body: file,
        ACL: "public-read"
      }
    });
    var promise = upload.promise();
    promise.then(
      async function (data) {
        console.log('data: ', data)
        // alert("Successfully uploaded tune.");
        const cloudfrontUrlPrefix = 'http://d28dtfvuvlqgls.cloudfront.net/'
            
        const newTuneUrl= `${cloudfrontUrlPrefix}${data.Key}`
        console.log('data.Key ', data.Key)

        const newTuneTitle = data.Key
        console.log('newTuneUrl: ', newTuneUrl)
        console.log('newTuneTitle: ', newTuneTitle)

        try {
          const mutationResponse = await updateCreatorTune({
            variables : {
              songUrl : newTuneUrl,
              title: newTuneTitle
            }
          });

          const updatedCreatr = mutationResponse.data.updateCreatorTune;
    
          window.location.reload()

        } catch (err) {
          console.error(err);
        }
      },
      function (err) {
        return alert("There was an error uploading your tune: ", err.message);
      }
    );
  }
  
  const handleFileUplooad = async (e) => {
    e.preventDefault()
    handleClose()
    if (curCreatr.songs.length === 5) {
      console.log('too many songs')
      return
    }
  
    addSongsS3(curCreatr.username)
  
  
  }


    return (
        <React.Fragment>
        <Button className="w-50 btn-sm mb-5 bskr-btn-purple" variant="primary" onClick={handleShow}>
          edit your tunes
        </Button>
  
        <Modal className="EditTunesModal" centered show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>edit your tunes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="m-2" onSubmit={handleFileUplooad}>
                <Form.Group>
                    <Form.File id="tuneupload" />
                </Form.Group>
                <Button type="submit" variant="primary btn-sm bskr-btn-purple">
              save
            </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
  
  export default EditTunes