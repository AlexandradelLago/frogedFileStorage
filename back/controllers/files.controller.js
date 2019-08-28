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


exports.getFiles = (req, res, next) => {
    File.find()
        .then(files => res.json(files))
        .catch(err => console.log(err));
}


exports.downloadFile = (req, res, next) => {
    let filename = req.file.filename;
    res.download(__dirname + '/uploads/' + filename);
}


exports.deleteFile = (req, res, next) => {
    console.log("estoy denttro del delete");
    File.findByIdAndUpdate(req.params.id, { deleted: true })
        .then(resp => {
            try {

                const rootDirectory = path.dirname(__dirname);
                const filePath = `${rootDirectory}/public${resp.url}`;

                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath)
                }
                //file removed
                res.json(resp)
            } catch (err) {
                console.error(err)
            }
        }).
        catch(err => console.log(err));
}


