const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const User = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String },
    email:{ type: String },
    role: { type: String },
    department: { type: String },
    password: {  type: String}
});
User.pre('save', function (next) {
    if(this.password) {
        if(this.isModified('password') || this.isNew) {
            this.createSalt((saltErr, salt ) => {
                if (saltErr) {
                    return next(saltErr);
                }
                this.hash(this.password, salt, (hashErr, hash) => {
                    if(hashErr) {
                        return next(hashErr);
                    }
                    this.password = hash;
                    return next();
                });
            });
        }
        else {
            return next();
        }
    }
    else {
        return next();
    }
});

User.methods = {
    
    createSalt(callback){
        return bcrypt.genSalt(function(err, salt) {
            if(err) {
                return callback(err);
            }
            else {
                return callback(null, salt);
            }
        });
    },
    hash(password, salt, callback){
        return bcrypt.hash(password, salt, function(err, hash){
            if(err) {
                return callback(err);
            }
            else {
                
                return callback(null, hash)
            }
        });
},
authenticate(password, callback){
    bcrypt.compare(password, this.password, function(err, result) {
        if(err) {
            return callback(err);
        }
        console.log(result)
        callback(null, result);
    });
}
}

module.exports = mongoose.model('User', User);