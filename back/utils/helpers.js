const fs = require('fs');
const path = require('path');
const File = require('../models/File.js');

/** 
 ** createFile - retunr a specific resource of db 
 * @function 
 * @param {Object} file information
 * @returns {json} db document created
 **/
 exports.createFile = async (fileInfo) => {
    const file = new File({
        fileName: fileInfo.file.filename,
        originalName: fileInfo.file.originalname,
        size: fileInfo.file.size,
        ext: fileInfo.file.mimetype,
        type: fileInfo.file.encoding
    });
  
    return await file.save();
}

/** 
 ** deleteFile - deletes the file from the folder 
 * @function 
 * @param {String} filePath 
 * @returns {void} 
 **/
exports.deleteFile = async(params) => {
    // mark delete in the db
    const fileDocument = await File.findByIdAndUpdate(params.id, { deleted: true });
    const fullPath = this.getPath(fileDocument.fileName);
    // delete the file in the folter
    if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath)
    }
    return fileDocument;
}

/** 
 ** getPath - adds the local path to the filename
 * @function 
 * @param {String} filename as saved in the folder
 * @returns {String} filePath to access the file
 **/
exports.getPath = (fileName) =>{
    const rootDirectory = path.dirname(__dirname);
    return `${rootDirectory}/public/uploads/${fileName}`;
}

