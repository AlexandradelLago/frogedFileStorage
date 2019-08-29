const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/'});
const controller = require("../controllers/files.controller");

/**
 * API endpoints - routes
 */

router.get('/all', controller.getFiles);
router.post('/upload', upload.single("file"),controller.uploadFile);
router.get('/:id', controller.fileDetail);
router.get( '/download/:id', controller.downloadFile);
router.put( '/delete/:id', controller.deleteFile);


module.exports = router;




