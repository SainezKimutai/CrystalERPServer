const salesNoteService = require("../services/salesNote.service.js");

exports.create = (req, res, next) => {
    salesNoteService.create(req.body)
        .then(note => res.json(note))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    salesNoteService.getAll()
        .then(notes => { res.json(notes); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    salesNoteService.getOne(req.params.id)
        .then(note => note ? res.json(note) : res.status(404).json({ message: 'not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    salesNoteService.update(req.params.id, req.body)
        .then((note)=> res.json(note))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    salesNoteService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};