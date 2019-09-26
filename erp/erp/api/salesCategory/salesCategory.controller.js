const salesCategoryService = require("../services/salesCategory.service.js");

exports.create = (req, res, next) => {
    salesCategoryService.create(req.body)
        .then(category => category ? res.json(category) : res.status(409).json({ message: 'Category already Exists' }))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    salesCategoryService.getAll()
        .then(categorys => { res.json(categorys); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    salesCategoryService.getOne(req.params.id)
        .then(cat => cat ? res.json(cat) : res.status(404).json({ message: 'Not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    salesCategoryService.update(req.params.id, req.body)
        .then((cat)=> res.json(cat))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    salesCategoryService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
