var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Opportunity = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true },
    name: {type: String},
    visible: {type: String},
    status: {type: String}
})

module.exports = mongoose.model('Opportunity', Opportunity);