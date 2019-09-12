const mongoose = require('mongoose');

// Schema
const clientSchema = new mongoose.Schema({
    companyName : String,
    managerName : String,
    primaryTelNumber : Number,
    secondaryTelNumber : Number,
    email : String,
    website : String,
    twitter : String,
    facebook : String,
    instagram : String    
});

// model
const Client = mongoose.model('Client', clientSchema);

module.exports = { Client : Client };