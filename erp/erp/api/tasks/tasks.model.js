var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String },
    project: {type:String},
    from:{ type: String },
    to: { type: String },
    description: { type: String },
    department: { type: String},
    assigned_user: {type: String},
    status: {type:String}
})

module.exports = mongoose.model('Task', Task);