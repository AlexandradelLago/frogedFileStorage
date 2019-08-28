var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/'});
const controller = require("../controllers/files.controller");

// files routes 
router.get('/all', controller.getFiles);
router.post('/new', upload.single("file"),controller.uploadFile);
router.get('/:id', controller.fileDetail);
router.get( '/:filename', controller.downloadFile);
router.put( '/delete/:id', controller.deleteFile);


module.exports = router;




