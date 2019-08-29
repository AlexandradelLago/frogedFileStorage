const multer = require('multer');
const uploadURL = './public/uploads/';


/** Multer configuration 
 * @constant  uploadURL = './public/uploads/'
 * @function 
 * @params {string} destination - folder where files are store
 * @params {string} naming of the file, if no specified multer will choose a random string
 **/

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadURL)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

module.exports =  multer({ storage: storage });