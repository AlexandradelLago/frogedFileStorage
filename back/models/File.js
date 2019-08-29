const mongoose = require("mongoose");

// deleted shows if the file has been deleted from the repository but we still can keep track of transfers

const fileSchema = new mongoose.Schema({
  filename: { type: String },
  originalFileName: { type: String },
  size: { type: String },
  ext: { type: String },
  type: { type: String },
  url: { type: String, default: '' },
  deleted: { type: Boolean, default: false },
  path : {type: String}
},
  { timestamps: true }
);

module.exports = mongoose.model('File', fileSchema);
