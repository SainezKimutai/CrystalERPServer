const mongoose = require('mongoose');

// Schema
const userSalesStageSchema = new mongoose.Schema({
    name : String,
    totalLeads : Number,
    totalRevenue : Number,
    userId: { type: mongoose.Schema.Types.Mixed}
});

// model
const UserSalesStage = mongoose.model('UserSalesStage', userSalesStageSchema);

module.exports = { UserSalesStage : UserSalesStage };
