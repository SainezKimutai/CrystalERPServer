const docPadService = require("../services/docPad.service.js");

exports.create = (req, res, next) => {
    docPadService.create(req.body)
        .then(doc => res.json(doc))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    docPadService.getAll()
        .then(docs => { res.json(docs); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    docPadService.getOne(req.params.id)
        .then(doc => doc ? res.json(doc) : res.status(404).json({ message: 'not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    docPadService.update(req.params.id, req.body)
        .then((doc)=> res.json(doc))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    docPadService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};