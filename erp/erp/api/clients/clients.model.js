const mongoose = require('mongoose');

// Schema
const clientSchema = new mongoose.Schema({
    name : String,
    mail : Number,
    telephone : Number
});

// model
const Client = mongoose.model('Client', clientSchema);

module.exports = { Client : Client };