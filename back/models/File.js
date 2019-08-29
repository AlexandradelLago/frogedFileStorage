/** @require
 * mongoose
 */
const mongoose = require("mongoose");

/**
 * This is the model of the collection in the mongoDB
 * @constructor
 * @property {string} fileName - Name of how the document was saved in the folder -Amazon-etc
 * @property {string} originalFileName - Original name of the docuemnt.
 * @property {string} size - Size in bytes 
 * @property {string} ext - mimetype of the file or file extension. Examples : application/pdf , image/jpeg
 * @property {string} type - encoding type of the file. example: 7bit
 * @property {boolean} deleted - true for deleted files.
 * @property {timestamps} createdAt - date of creation.
 *  @property {timestamps} updatedAt - date of last update.
 */
const fileSchema = new mongoose.Schema({
  fileName: { type: String },
  originalName: { type: String },
  size: { type: String },
  ext: { type: String }, 
  type: { type: String },
  deleted: { type: Boolean, default: false },
},
  { timestamps: true }
);

module.exports = mongoose.model('File', fileSchema);
