const mongoose = require('mongoose');

// Schema
const customarySchema = new mongoose.Schema({
    serviceName : String,
    task : [{
        taskName: String,
        asignedTeam: String
    }]
});

// model
const CustomService = mongoose.model('CustomService', customarySchema);

module.exports = { CustomService : CustomService };
