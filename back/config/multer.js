const multer = require('multer');
const uploadURL = './public/uploads/';


/** Multer configuration  */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadURL)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload   = multer({ storage: storage });
module.exports = upload;