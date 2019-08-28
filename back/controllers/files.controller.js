var File = require('../models/File.js');
const fs = require('fs');
var path = require('path');

exports.uploadFile = (req, res, next) => {
    try {
        const file = new File({
            name: req.body.name,
            originalFileName: req.file.originalname,
            size: req.file.size,
            ext: req.file.mimetype,
            type: req.file.encoding,
            specs: req.body.specs,
            url: `/uploads/${req.file.filename}`
        })
        console.log(req.body.specs);
        file.save()
            .then(fileCreated => res.json(fileCreated))
            .catch(err => console.log(err));
    } catch (e) {
        next(e);
    }
}

exports.fileDetail = (req, res, next) => {
    File.findById(req.params.id)
        .then(singleFile => res.json(singleFile))
        .catch(err => console.log(err));
}


exports.getFiles = async (req, res, next) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (err) {
        console.error(err)
        next(err);

    }
}


exports.downloadFile = (req, res, next) => {
    let filename = req.file.filename;
    res.download(__dirname + '/uploads/' + filename);
}


exports.deleteFile = async (req, res, next) => {
    try {
        const fileDocument = await File.findByIdAndUpdate(req.params.id, { deleted: true });
        deleteFile(fileDocument.url);
        res.status(200).json(fileDocument);
    } catch (err) {
        console.error(err)
        next(err);
    }
};

const deleteFile = (filePath) => {
    const rootDirectory = path.dirname(__dirname);
    const fullPath = `${rootDirectory}/public${filePath}`;

    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath)
    }
};

