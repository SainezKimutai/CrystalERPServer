const mongoose = require('mongoose');

// Schema
const invoiceSchema = new mongoose.Schema({
    customerName: String,
    paymentTerms: String,
    invoiceNumber: String,
    invoiceDate: String,
    dueDate: String,
    salesPerson: String,
    createdOn: Date,
    items: [{
        flight: String,
        from: String,
        to: String,
        date: String,
        departure: String,
        arrival: String,
        class: String,
        costPerPerson: Number,
        persons: Number,
        totalCost: Number,
        
    }],
    untaxedAmount: Number,
    totalTax: Number,
    totalAmount: Number,
    invoiceType: String,
    termsAndConditions: String

});

// model
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = { Invoice : Invoice };