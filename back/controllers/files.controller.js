var File = require('../models/File.js');
const fs = require('fs');
var path = require('path');

exports.uploadFile = async (req, res, next) => {
    try {
        const fileCreated = await createFile(req);
        res.status(200).json(fileCreated);
    } catch (err) {
        console.log(err);
        next(err);
    }
}


exports.fileDetail = async (req, res, next) => {
    try {
        const singleFile = await File.findById(req.params.id)
        res.status(200).json(singleFile);
    } catch (err) {
        console.error(err)
        next(err);
    }
}

// return all uploaded files that have not been deleted
exports.getFiles = async (req, res, next) => {
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (err) {
        console.error(err)
        next(err);
    }
}


exports.downloadFile = async (req, res, next) => {
    try {
        const file = await File.findById(req.params.id);
        res.download(getPath(file.path));
        res.status(200).json(file);
    } catch (err) {
        console.error(err)
        next(err);
    }
}


exports.deleteFile = async (req, res, next) => {
    try {
        const fileDocument = await File.findByIdAndUpdate(req.params.id, { deleted: true });
        deleteFile(fileDocument.path);
        res.status(200).json(fileDocument);
    } catch (err) {
        console.error(err)
        next(err);
    }
};


const createFile = async (fileInfo) => {
    const file = new File({
        filename: fileInfo.file.filename,
        originalFileName: fileInfo.file.originalname,
        size: fileInfo.file.size,
        ext: fileInfo.file.mimetype,
        type: fileInfo.file.encoding,
        url: `/uploads/${fileInfo.file.filename}`,
        path: fileInfo.file.path
    })

    return await file.save();
}

const deleteFile = (filePath) => {
    const fullPath = getPath(filePath);
    console.log(fullPath);
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath)
    }
}


const getPath = (filePath) =>{
    const rootDirectory = path.dirname(__dirname);
    return `${rootDirectory}/${filePath}`;
}

