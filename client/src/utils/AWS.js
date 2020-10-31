require('dotenv').config();
{/* https://sdk.amazonaws.com/js/aws-sdk-2.782.0.min.js */}

    const bucketName = process.env.BUCKET_NAME;
    const bucketRegion = process.env.BUCKET_REGION;
    const poolId = process.env.POOL_ID;

    console.log(bucketName)

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

    // console.log('s3: ', s3)
    console.log('s3.endpoint: ', s3.endpoint)
    console.log('s3.config.params: ', s3.config.params)

    // s3.endpoint:  Endpoint {
    //   protocol: 'https:',
    //   host: 's3.us-east-2.amazonaws.com',
    //   port: 443,
    //   hostname: 's3.us-east-2.amazonaws.com',
    //   pathname: '/',
    //   path: '/',
    //   href: 'https://s3.us-east-2.amazonaws.com/'
    // }
    // s3.config.params:  { Bucket: 'buskr-data' }
const AWS = require('aws-sdk')


// console.log('AWS: ', AWS)


// this is where we create a class with methods to perform crud operations with AWS database

 class AWSService {
  // our method will receive the username from form data that has already been validated for lack of improper characters such as / 
createDirectory(name) {
  // this.?
  



  //   var albumKey = encodeURIComponent(albumName);
  //   s3.headObject({ Key: albumKey }, function (err, data) {
  //     if (!err) {
  //       return alert("Album already exists.");
  //     }
  //     if (err.code !== "NotFound") {
  //       return alert("There was an error creating your album: " + err.message);
  //     }
  //     s3.putObject({ Key: albumKey }, function (err, data) {
  //       if (err) {
  //         return alert("There was an error creating your album: " + err.message);
  //       }
  //       alert("Successfully created album.");
  //       viewAlbum(albumName);
  //     });
  //   });
  // }

  }




// this functionality needs to go in the component to validate the form onBlur
    // function createAlbum(albumName) {
  //   albumName = albumName.trim();
  //   if (!albumName) {
  //     return alert("Album names must contain at least one non-space character.");
  //   }
  //   if (albumName.indexOf("/") !== -1) {
  //     return alert("Album names cannot contain slashes.");
  //   }

  // checkDupDir(name)



  // ***************************************

  
// **************************************************************


  uploadFile() {
    // conditionally handle img vs mp3/wav/ogg? for our db storage
  }

  deleteFile() {

  }

  checkDupDir() {
    // can we access our db to verify no dups on username?  may need to use apollo client.methods() since we're not in a component

    // return true if no dup
  }


}




