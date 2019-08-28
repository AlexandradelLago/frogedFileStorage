const mongoose = require ("mongoose");

const fileSchema = new mongoose.Schema({  
    name : { type : String},
    size : { type : String},
    originalFileName: {type : String},
    ext:  {type : String},
    type: {type : String}, 
    url: {type : String, default : ''},
    specs: {type : Array, default : [] }
    },
    {timestamps : true }
  );

  module.exports = mongoose.model('File', fileSchema);
  