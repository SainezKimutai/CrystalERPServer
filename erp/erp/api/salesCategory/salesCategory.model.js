const mongoose = require('mongoose');

// Schema
const salesCategorySchema = new mongoose.Schema({
    name : String,
    color: { name: String, code: String },
    totalLeads : Number,
    totalRevenue : Number
});

// model
const SalesCategory = mongoose.model('SalesCategory', salesCategorySchema);

module.exports = { SalesCategory : SalesCategory };
