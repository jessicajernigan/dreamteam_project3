import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_CREATOR_IMG } from '../../utils/mutations';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import AWS from 'aws-sdk'
// const AWS = require('aws-sdk')

import './EditPhoto.css'

require('dotenv').config();

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

const EditPhoto = ({curCreatr}) => {


    // console.log('new curCreatr without photo', curCreatr)  
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ updateCreatorImg ] = useMutation(UPDATE_CREATOR_IMG);

    // add photo to s3
    async function addPhotoS3(username) {
      // console.log('addPhoto running')
      var files = document.getElementById("photoupload").files;
      // console.log('files: ', files[0].name)
      // console.log('bucketName', bucketName)
      if (!files.length) {
        return alert("Please choose a file to upload first.");
      }
      var file = files[0];
      var fileName = file.name;
      var CreatrPhotoKey = encodeURIComponent(username) + "/";
      var photoKey = CreatrPhotoKey + fileName;
      // Use S3 ManagedUpload class as it supports multipart uploads
      var upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: bucketName,
          Key: photoKey,
          Body: file,
          ACL: "public-read"
        }
      });
      var promise = upload.promise();
      promise.then(
        async function (data) {
          // alert("Successfully uploaded photo.");
          console.log('data from s3 after successful upload', data) 

          const cloudfrontUrlPrefix = 'http://d28dtfvuvlqgls.cloudfront.net/'
          
          const newImgUrl = `${cloudfrontUrlPrefix}${data.key}`
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

          // Bucket: "buskr-data"
          // ETag: ""f5b007e6a4d678b060fa2fe298887344""
          // Key: "tester/20171005_134456.jpg"
          // Location: "https://buskr-data.s3.us-east-2.amazonaws.com/tester/20171005_134456.jpg"
          // key: "tester/20171005_134456.jpg"
        },
        function (err) {
          return alert("There was an error uploading your photo: ", err.message);
        }
      );
    }


    // delete photo from s3
    function deletePhotoS3(photoKey) {
      console.log('deletePhoto running')
      s3.deleteObject({ Key: photoKey }, function (err, data) {
        if (err) {
          return alert("There was an error deleting your photo: ", err.message);
        }
        // alert("Successfully deleted photo.");
      });
    }

    const handleFileUpload = async (e) => {
      e.preventDefault()
      handleClose()
      if (curCreatr.imgUrl) {

        // join('').splice(36)
        const photoKey = curCreatr.imgUrl.slice(44)
        // const photoKey = curCreatr.imgUrl.slice(curCreatr.imgUrl.indexOf(curCreatr.username))
        console.log('photoKey: ', photoKey)
        deletePhotoS3(curCreatr.imgUrl)
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

  // function viewAlbum(albumName) {
  //   var albumPhotosKey = encodeURIComponent(albumName) + "/";
  //   s3.listObjects({ Prefix: albumPhotosKey }, function (err, data) {
  //     if (err) {
  //       return alert("There was an error viewing your album: " + err.message);
  //     }
  //     // 'this' references the AWS.Response instance that represents the response
  //     var href = this.request.httpRequest.endpoint.href;
  //     var bucketUrl = href + albumBucketName + "/";
  //     var photos = data.Contents.map(function (photo) {
  //       var photoKey = photo.Key;
  //       var photoUrl = bucketUrl + encodeURIComponent(photoKey);
  //       return getHtml([
  //         "<span>",
  //         "<div>",
  //         '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
  //         "</div>",
  //         "<div>",
  //         "<span onclick=\"deletePhoto('" +
  //         albumName +
  //         "','" +
  //         photoKey +
  //         "')\">",
  //         "X",
  //         "</span>",
  //         "<span>",
  //         photoKey.replace(albumPhotosKey, ""),
  //         "</span>",
  //         "</div>",
  //         "</span>"
  //       ]);
  //     });
  //     var message = photos.length
  //       ? "<p>Click on the X to delete the photo</p>"
  //       : "<p>You do not have any photos in this album. Please add photos.</p>";
  //     var htmlTemplate = [
  //       "<h2>",
  //       "Album: " + albumName,
  //       "</h2>",
  //       message,
  //       "<div>",
  //       getHtml(photos),
  //       "</div>",
  //       '<input id="photoupload" type="file" accept="image/*">',
  //       '<button id="addphoto" onclick="addPhoto(\'' + albumName + "')\">",
  //       "Add Photo",
  //       "</button>",
  //       '<button onclick="listAlbums()">',
  //       "Back To Albums",
  //       "</button>"
  //     ];
  //     document.getElementById("app").innerHTML = getHtml(htmlTemplate);
  //   });
  // }



  // function addPhoto(albumName) {
  //   var files = document.getElementById("photoupload").files;
  //   if (!files.length) {
  //     return alert("Please choose a file to upload first.");
  //   }
  //   var file = files[0];
  //   var fileName = file.name;
  //   var albumPhotosKey = encodeURIComponent(albumName) + "/";
  //   var photoKey = albumPhotosKey + fileName;
  //   // Use S3 ManagedUpload class as it supports multipart uploads
  //   var upload = new AWS.S3.ManagedUpload({
  //     params: {
  //       Bucket: albumBucketName,
  //       Key: photoKey,
  //       Body: file,
  //       ACL: "public-read"
  //     }
  //   });
  //   var promise = upload.promise();
  //   promise.then(
  //     function (data) {
  //       alert("Successfully uploaded photo.");
  //       viewAlbum(albumName);
  //     },
  //     function (err) {
  //       return alert("There was an error uploading your photo: ", err.message);
  //     }
  //   );
  // }
