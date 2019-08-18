const mongoose = require('mongoose');

// Schema
const projectSchema = new mongoose.Schema({
    projectName : String,
    clientName: String,
    task : [{
        taskName: String,
        asignedTeam: String,
        taskStatus: String,
        taskDuration: Number,
        taskStartDate: Date,
        taskEndDate: Date,
    }],
    cost: Number,
    priority: Number,
    projectStatus: String,
    projectDuration: Number,
    projectStartDate: Date,
    projectEndDate: Date,
    progress: Number
});

// model
const Project = mongoose.model('Project', projectSchema);

module.exports = { Project : Project };

