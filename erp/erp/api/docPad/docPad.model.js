const mongoose = require('mongoose');

// Schema
const docPadSchema = new mongoose.Schema({
    title: String,
    content:  String,
    createdOn: Date,
    createdBy: String,
});

// model
const DocPad = mongoose.model('DocPad', docPadSchema);

module.exports = { DocPad : DocPad };