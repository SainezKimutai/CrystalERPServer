const mongoose = require('mongoose');

// Schema
const invoiceSchema = new mongoose.Schema({
    invoiceType: String,
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
        persons: {
            adult: Number,
            child: Number,
            infant: Number
        },
        totalPersons: Number,
        totalCost: Number
    }],
    totalAmount: Number,
    accomodation: [{
            hotel: String,
            roomType: String,
            mealPlan: String,
            city: String,
            nights: Number,
            single: Number,
            double: Number,
            childWithBed: Number
    }],
    totalAccomodationSingle: Number,
    totalAccomodationDouble: Number,
    totalAccomodationChild: Number,
    airlineInclusion: [{
        content: String
    }],
    airlineExclusion: [{
        content: String
    }],
    itinerary: [{
      content: String,
      image: {
        name: String,
        url: String,
        bs64: String
      },
    }]
});
// {
//   content: String,
//   image: String
// }
// model
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = { Invoice : Invoice };
