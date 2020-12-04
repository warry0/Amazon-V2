const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

aws.config.update({
  secretAccessKey: process.env.AWSSecretKey,
  accessKeyId: process.env.AWSAccessKeyId,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "amazon-clone-v.a",
    acl: "public-read",
    metadeta: (req, file, cb) => {
      cb(null, { fieldName: file.fieldName });
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString());
    },
  }),
});
module.exports = upload;
