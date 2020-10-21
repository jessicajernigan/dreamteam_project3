// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

require('dotenv').config();

const {ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION} = process.env;

AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION
  });

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'buskr-data',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
