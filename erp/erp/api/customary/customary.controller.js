const customaryService = require("../services/customary.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    customaryService.create(req.body)
        .then(service => service ? res.json(service) : res.status(409).json({ message: 'Service already Exists' }))
        .catch(err => next(err));
 
};


// Get One
exports.getOne = (req, res, next) => {
    console.log(req.params.id);
    customaryService.getOne(req.params.id)
        .then(service => service ? res.json(service) : res.sendStatus(404))
        .catch(err => next(err));
};

// Get All
exports.getAll = (req, res, next) => {
    customaryService.getAll()
        .then(services => { res.json(services); })
        .catch(err => next(err));
};



// Update
exports.update = (req, res, next) => {
    customaryService.update(req.params.id, req.body)
        .then((service)=> res.json(service))
        .catch(err => next(err));
};


// Delete
exports.delete = (req, res, next) => {
    customaryService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
