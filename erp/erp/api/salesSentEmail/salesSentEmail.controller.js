const salesSentEmailService = require("../services/salesSentEmail.service.js");

exports.create = (req, res, next) => {
    salesSentEmailService.create(req.body)
        .then(email => res.json(email))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    salesSentEmailService.getAll()
        .then(emails => { res.json(emails); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    salesSentEmailService.getOne(req.params.id)
        .then(email => email ? res.json(email) : res.status(404).json({ message: 'not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    salesSentEmailService.update(req.params.id, req.body)
        .then((email)=> res.json(email))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    salesSentEmailService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};
