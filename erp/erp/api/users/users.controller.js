 
 var User = require('./users.model');
 var nodemailer = require('nodemailer');
 var mailservice = require('../services/mail.service');
 const bcrypt = require('bcrypt');


 //get all users...
 exports.getMany = (req, res) => {

    var search = {
        name: { $regex: req.query.name, $options: "i" },
        role: { $regex: req.query.role, $options: "i" },
        department: {$regex: req.query.department, $options: "1"}
       
    };
    var query = (req.query.name || req.query.role || req.query.department) ? search : {};
    User.find(query).sort({ name: 1 }).exec(
        function (err, users) {
           // console.log(meals);
            if (err) {
                return res.status(500).json(err);
            }
           
            res.status(200).json(users);
        });
 };
//get a specific user...
 exports.getOne =(req, res) => {
    User.findById(req.params.id, function (err, user) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!user){
            return res.status(404).json('Not found.');
        }
        res.status(200).json(user);
    });
 }
//add a user...
 
 exports.add = (req, res) => {
    User.findOne({email: req.body.email }, (err, user) => {
        if ( err) {
            return res.status(400).json({'msg': err});
        }

        if (user) {
            return res.status(400).json({'msg': 'The user already exists'});
    }
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        department: req.body.department,
        password: req.body.password
    });
    user.save(function(err, result) {
        if(err) {
            return res.status(500).json(err);
        }
        let credentials = {
            email: 'muindegeofrey@gmail.com',
            id:'geofrey7543' 
        }
        let content = {
         subject: 'Confirm Registration',
         message: 'This is a system generated email for development purposes, if you have any questions email: geofrey@imprintaf.com'
        }

        mailservice.sendemail(req.body.email,credentials,content);
        res.status(201).json(result);
    });
  });
 }
//edit a user...
 exports.edit = (req, res) => {
      
    User.findById(req.params.id, function (err, user) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!user) {
            return res.status(404).json(err);
        }
         
        user.name = req.body.name || user.name,
        user.email = req.body.email || user.email,
        user.role = req.body.role || user.role,
        user.department = req.body.department || user.department,
        user.password = req.body.password || user.password;
        user.save(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(201).json(result);
        });
    });

 }
//delete a specific user..
 exports.delete = (req, res) => {
    User.findById(req.params.id, function (err, user) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!user) {
            return res.status(404).json(err);
        }
        user.remove(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(204).json(result);
        });
    });
 }

 
exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'msg': 'You need to send email and password' });
    }
    console.log(req.body.email)
    User.findOne({'email':req.body.email} , function(err, user) {
        if(err){
            console.log(err)
            return res.status(500).send({ 'msg': 'Internal Server Error. Please Check Your Server' });
             
        }
        if(!user) {
            return res.status(404).send({ 'msg': 'The Email or Password is not Found. Please Try Again' });
        }
        else {
            user.authenticate(req.body.password, function(err, result) {
                if(result && !err){
                    res.json(user);
                }
                else {
                    res.status(401).send({ 'msg': 'You are not authorised.' });
                }
            });
        }
    });
};

  