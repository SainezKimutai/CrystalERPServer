const mongoose = require('mongoose');

// Schema
const invoiceSchema = new mongoose.Schema({
    customerName: String,
    paymentTerms: String,
    invoiceDate: String,
    dueDate: String,
    salesPerson: String,
    createdOn: Date,
    items: [{
        product: String,
        description: String,
        quantity: String,
        price: Number,
        tax: Number,
        subTotal: Number
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