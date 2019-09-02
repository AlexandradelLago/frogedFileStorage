const express = require('express');
const router = express.Router();
const upload  = require('../config/multer.js');
const controller = require("../controllers/files.controller");

/**
 * API endpoints - routes
 */
router.get('/', controller.getFiles);
router.get('/:id', controller.fileDetail);
router.delete( '/:id', controller.deleteFile);
router.post('/upload', upload.single("file"),controller.uploadFile);
router.post( '/download', controller.downloadFile);

module.exports = router;




