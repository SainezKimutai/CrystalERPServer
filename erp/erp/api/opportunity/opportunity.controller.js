const opportunityService = require("../services/opportunity.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    opportunityService.create(req.body)
        .then(opp => opp ? res.json(opp) : res.status(409).json({ message: 'Lead already Exists' }))
        .catch(err => next(err));
 
};


// Get All
exports.getAll = (req, res, next) => {
    opportunityService.getAll()
        .then(opps => { res.json(opps); })
        .catch(err => next(err));
};



// Get One
exports.getOne = (req, res, next) => {
    // console.log(req.params.id);
    opportunityService.getOne(req.params.id)
            .then(Opp => Opp ? res.json(Opp) : res.sendStatus(404))
            .catch(err => next(err));
};



// Update
exports.update = (req, res, next) => {
    opportunityService.update(req.params.id, req.body)
        .then((Opp)=> res.json(Opp))
        .catch(err => next(err));
};



// Delete
exports.delete = (req, res, next) => {
    opportunityService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};






