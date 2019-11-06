const mongoose = require('mongoose');

// Schema
const opportunitySchema = new mongoose.Schema({
    projectName : String,
    clientName: String,
    projectManager: String,
    task : [{
        taskName: String,
        assignedTeam: String,
        assignedUser: String,
        taskStatus: String,
        taskDuration: Number,
        taskStartDate: Date,
        taskEndDate: Date,
    }],
    revenue: Number,
    priority: Number,
    projectStatus: String,
    projectDuration: Number,
    projectStartDate: Date,
    projectEndDate: Date,
    createdOn: Date,
});

// model
const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = { Opportunity : Opportunity };