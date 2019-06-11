 
 var Task = require('./tasks.model');
 var User = require('../users/users.model');
 var mailservice = require('../services/mail.service');

 
 //get all users...
 exports.getMany = (req, res) => {

    var search = {
        name: { $regex: req.query.name, $options: "i" },
        assigned_user: { $regex: req.query.assigned_user, $options: "i" },
        department: {$regex: req.query.department, $options: "i"},
        from : {$regex: req.query.from, $options: "i"},
        to: { $regex: req.query.to, $options:"i"},
        status: {$regex: req.query.status, $options: "i"},
       
    };
    var query = (req.query.name || req.query.assigned_user || req.query.department || req.query.from || req.query.to || req.query.status) ? search : {};
    Task.find(query).sort({ name: 1 }).exec(
        function (err, tasks) {
           // console.log(meals);
            if (err) {
                return res.status(500).json(err);
            }
           
            res.status(200).json(tasks);
        });

 };
//get a specific user...
 exports.getOne =(req, res) => {
    Task.findById(req.params.id, function (err, task) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!task){
            return res.status(404).json('Not found.');
        }
        res.status(200).json(task);
    });
 }
//add a user...
 exports.add = (req, res) => {
    var task = new Task({
        name: req.body.name,
        project: req.body.project,
        from: req.body.from,
        to: req.body.to,
        description: req.body.description,
        department: req.body.department,
        assigned_user: req.body.assigned_user,
        status: req.body.status
    });
    task.save(function(err, result) {
        if(err) {
            return res.status(500).json(err);
        }
        getUser(task.assigned_user);
        res.status(201).json(result);
         
    });
 }
//edit a user...
 exports.edit = (req, res) => {
    Task.findById(req.params.id, function (err, task) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!task) {
            return res.status(404).json(err);
        }
         
        task.name = req.body.name || task.name,
        task.project = req.body.project || user.project,
        task.from = req.body.from || task.from,
        task.to = req.body.to || task.tp,
        task.description = req.body.description || task.description,
        task.assigned_user =  req.body.assigned_user || task.assigned_user,
        task.status = req.body.status || task.status

        task.save(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(201).json(result);
        });
    });

 }
//delete a specific user..
 exports.delete = (req, res) => {
    Task.findById(req.params.id, function (err, task) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!task) {
            return res.status(404).json(err);
        }
        task.remove(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(204).json(result);
        });
    });
 }

 getUser = (id)=> {
     User.find({'_id': id}, function(err, user){
         if(err){
             return res.status(500).json(err);
         }
         if(!user){
             return res.status(404).json('Not Found')
         }
         else{
          
            let credentials = {
                email: 'muindegeofrey@gmail.com',
                id:'geofrey7543' 
            }
            let content = {
            subject: 'A new task was assigned to you',
            message: 'This is a system generated email for development purposes, if you have any questions email: geofrey@imprintaf.com'
            }
            
            mailservice.sendemail(user[0].email, credentials, content)
         }

     })
 }
