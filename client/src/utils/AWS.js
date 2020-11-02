import AWS from 'aws-sdk'
require('dotenv').config();

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const poolId = process.env.POOL_ID;

console.log('bucketName: ', bucketName);

AWS.config.update({
	region: bucketRegion,
	credentials: new AWS.CognitoIdentityCredentials({
		IdentityPoolId: poolId
	})
});

const s3 = new AWS.S3({
	apiVersion: '2006-03-01',
	params: { Bucket: bucketName }
});

// this is where we create a class with methods to perform crud operations with AWS database
class AWSService {

	signup(creatrDirKey) {

		s3.headObject({ Key: creatrDirKey }, function (err, data) {
			console.log('inside signUp headObject');
			if (!err) {
				return alert("A creator with this username already exists.");
			}
			if (err.code !== "NotFound") {
				return alert("There was an error creating your content directory: " + err.message);
			}
			s3.putObject({ Key: creatrDirKey }, function (err, data) {
				console.log('inside signUp put');
				if (err) {
					return alert("There was an error creating your content directory: " + err.message);
				}
				alert("Successfully created content directory.");

			});
		});

	}

	upload(fileKey, file) {

		return new AWS.S3.ManagedUpload({
			params: {
				Bucket: bucketName,
				Key: fileKey,
				Body: file,
				ACL: "public-read"
			}
		});

	}

	delete(photoKey) {

		s3.deleteObject({ Key: photoKey }, function (err, data) {
			if (err) {
				return alert("There was an error deleting your photo: ", err.message);
			}
			// alert("Successfully deleted photo.");
		});
	}

}
// export new instance 
export default new AWSService()