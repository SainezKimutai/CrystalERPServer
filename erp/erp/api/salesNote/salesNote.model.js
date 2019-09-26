const mongoose = require('mongoose');

// Schema
const salesNoteSchema = new mongoose.Schema({
    title: String,
    content:  String,
    projectId: { type: mongoose.Schema.Types.Mixed},
    createdAt: Date,
    createdBy: String,
});

// model
const SalesNote = mongoose.model('SalesNote', salesNoteSchema);

module.exports = { SalesNote : SalesNote };