const salesCategoryService = require("../services/salesCategory.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    salesCategoryService.create(req.body)
        .then(category => category ? res.json(category) : res.status(409).json({ message: 'Category already Exists' }))
        .catch(err => next(err));
 
};


// Get All
exports.getAll = (req, res, next) => {
    salesCategoryService.getAll()
        .then(categorys => { res.json(categorys); })
        .catch(err => next(err));
};


// Get One
exports.getOne = (req, res, next) => {
    // console.log(req.params.id);
    salesCategoryService.getOne(req.params.id)
            .then(cat => cat ? res.json(cat) : res.sendStatus(404))
            .catch(err => next(err));
};



// Update
exports.update = (req, res, next) => {
    salesCategoryService.update(req.params.id, req.body)
        .then((cat)=> res.json(cat))
        .catch(err => next(err));
};


// Delete
exports.delete = (req, res, next) => {
    salesCategoryService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
