const teamService = require("../services/team.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    teamService.create(req.body)
        .then(team => team ? res.json(team) : res.status(409).json({ message: 'Team already Exists' }))
        .catch(err => next(err));
 
};


// Get All
exports.getAll = (req, res, next) => {
    teamService.getAll()
        .then(teams => { res.json(teams); })
        .catch(err => next(err));
};


// Delete
exports.delete = (req, res, next) => {
    teamService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};


