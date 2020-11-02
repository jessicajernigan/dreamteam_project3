const AWS = require('aws-sdk');

require('dotenv').config();
{
	/* https://sdk.amazonaws.com/js/aws-sdk-2.782.0.min.js */
}

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const poolId = process.env.POOL_ID;

console.log(bucketName);

AWS.config.update({
	region      : bucketRegion,
	credentials : new AWS.CognitoIdentityCredentials({
		IdentityPoolId : poolId
	})
});
const s3 = new AWS.S3({
	apiVersion : '2006-03-01',
	params     : { Bucket: bucketName }
});

// this is where we create a class with methods to perform crud operations with AWS database

class AWSService {
	createDirectory() {}

	uploadFile() {}

	deleteFile() {}

	checkDupDir() {}
}
