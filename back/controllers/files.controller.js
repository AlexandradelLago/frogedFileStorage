let File = require('../models/File.js');
const helper = require('../utils/helpers.js');


/**
 * API controllers 
 * getFails - returns and array of json with the files with deleled == false
 * @param {id} 
 * @returns {json[]} 
 * 
 */
// return all uploaded files that have not been deleted
exports.getFiles = async (req, res, next) => {
    try {
        // { deleted : false } --Use this in case if we want to list only the actual uploaded files
        const files = await File.find();
        res.status(200).json(files);
    } catch (err) {
        console.error(err)
        next(err);
    }
}

/**
 * API controllers 
 * fileDetail - retunr a specific resource of db 
 * @param {Object.id} 
 * @returns {file} the selected document
 */
// get a single db file detail
exports.fileDetail = async (req, res, next) => {
    try {
        const singleFile = await File.findById(req.params.id, {deleted : false})
        res.status(200).json(singleFile);
    } catch (err) {
        console.error(err)
        next(err);
    }
}

/**
 * API controllers 
 * deleteFile - return a specific resource of db 
 * @param   {id} 
 * @returns {file} 
 */
// marks the document of DB related to the file to DELETE and deletes the actual file
exports.deleteFile = async (req, res, next) => {
    try {
        const fileDocument = await helper.deleteFile(req.params);
        res.status(200).json(fileDocument);
    } catch (err) {
        console.error(err)
        next(err);
    }
};

/**
 * API controllers 
 * uploadFile - creates the document in DB
 * @param {req} file info
 * @returns {file} the created document
 */
// after having uploaded the file with the multer middleware it creates the db document
exports.uploadFile = async (req, res, next) => {
    try {
        const fileCreated = await helper.createFile(req);
        res.status(200).json(fileCreated);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

/**
 * API controllers 
 * fileDetail - retunr a specific resource of db 
 * @param {filename} 
 * @returns {file} 
 */
exports.downloadFile = async (req, res, next) => {
    try {
        res.sendFile(helper.getPath(req.body.filename));
    } catch (err) {
        console.error(err)
        next(err);
    }
}




