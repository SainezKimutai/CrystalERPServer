const mongoose = require('mongoose');

// Schema
const salesCategorySchema = new mongoose.Schema({
    name : String
});

// model
const SalesCategory = mongoose.model('SalesCategory', salesCategorySchema);

module.exports = { SalesCategory : SalesCategory };
