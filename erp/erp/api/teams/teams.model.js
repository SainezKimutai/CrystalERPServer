const mongoose = require('mongoose');

// Schema
const teamSchema = new mongoose.Schema({
    name : String
});

// model
const Teams = mongoose.model('Teams', teamSchema);

module.exports = { Teams : Teams };
