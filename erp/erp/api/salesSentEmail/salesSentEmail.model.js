const mongoose = require('mongoose');

// Schema
const salesSentEmailSchema = new mongoose.Schema({
  sender: String,
  reciever: String,
  subject: String,
  message: String,
  sentOn: Date
});

// model
const SalesSentEmail = mongoose.model('SalesSentEmail', salesSentEmailSchema);

module.exports = { SalesSentEmail : SalesSentEmail };
