// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

require('dotenv').config();

const { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } = process.env;

AWS.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION
});

// Create S3 service object
s3 = new AWS.S3({ apiVersion: '2006-03-01' });

let artistName = ''
let bucketName = 'buskr-data/buskr-audio' + artistName;
let serverFileName = 'instrumental-chill_-_Rain.mp3'
let localFileName = './temp/' + serverFileName

var fileStream = require('fs').createWriteStream(localFileName);
var s3Stream = s3.getObject({ Bucket: bucketName, Key: serverFileName }).createReadStream();

// Listen for errors returned by the service
s3Stream.on('error', function (err) {
    // NoSuchKey: The specified key does not exist
    console.error(err);
});

s3Stream.pipe(fileStream).on('error', function (err) {
    // capture any errors that occur when writing data to the file
    console.error('File Stream:', err);
}).on('close', function () {
    console.log('Done.');
});

