var Project = require('./projects.model');

exports.getMany = (req, res) => {

    var search = {
        name: { $regex: req.query.name, $options: "i" }
    }

    var query = (req.query.name) ? search: {};
    Project.find(query).sort({name: 1}).exec
    (function (err, projects) {
            if(err){
                return res.status(500).json(err);
            }
            res.status(200).json(projects);
    }
    )

}

exports.getOne = (req, res) => {

    Project.findById(req.params.id, function (err, project) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!project){
            return res.status(404).json('Not found.');
        }
        res.status(200).json(project);
    });

}

exports.add = (req, res) => {
    var project = new Project({
        name: req.body.name,
        
    });
    project.save(function(err, result) {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(result);
    });
}

exports.edit = (req, res) => {

    Project.findById(req.params.id, function (err, project) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!project) {
            return res.status(404).json(err);
        }
         
        project.name = req.body.name || project.name,
         
        project.save(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(201).json(result);
        });
    });

}

exports.delete = (req, res) => {

    Project.findById(req.params.id, function (err, project) {
        if(err) {
            return res.status(500).json(err);
        }
        if(!project) {
            return res.status(404).json(err);
        }
        project.remove(function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            res.status(204).json(result);
        });
    });  

}