var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true },
    name: {type: String},
    from: {type: String},
    to: {type: String},
    status: {type: String}
})

module.exports = mongoose.model('Project', Project);