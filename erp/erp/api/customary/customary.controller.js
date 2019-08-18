const customaryService = require("../services/customary.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    customaryService.create(req.body)
        .then(service => service ? res.json(service) : res.status(409).json({ message: 'Service already Exists' }))
        .catch(err => next(err));
 
};


// Get All
exports.getAll = (req, res, next) => {
    customaryService.getAll()
        .then(services => { res.json(services); })
        .catch(err => next(err));
};


// Delete
exports.delete = (req, res, next) => {
    customaryService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
