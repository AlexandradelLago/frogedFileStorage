const express = require('express');
const router = express.Router();
const upload  = require('../config/multer.js');
const controller = require("../controllers/files.controller");

/**
 * API endpoints - routes
 */
router.get('/all', controller.getFiles);
router.get('/:id', controller.fileDetail);
router.put( '/delete/:id', controller.deleteFile);
router.post('/upload', upload.single("file"),controller.uploadFile);
router.get( '/download/:id', controller.downloadFile);

module.exports = router;




