const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String },
  originalFileName: { type: String },
  size: { type: String },
  ext: { type: String },
  type: { type: String },
  url: { type: String, default: '' },
  deleted: { type: Boolean, default: false }
},
  { timestamps: true }
);

module.exports = mongoose.model('File', fileSchema);
