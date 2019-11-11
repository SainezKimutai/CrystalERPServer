const invoiceService = require("../services/invoice.service.js");

exports.create = (req, res, next) => {
    invoiceService.create(req.body)
        .then(invoice => res.json(invoice))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    invoiceService.getAll()
        .then(invoices => { res.json(invoices); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    invoiceService.getOne(req.params.id)
        .then(invoice => invoice ? res.json(invoice) : res.status(404).json({ message: 'not found'}))
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    invoiceService.update(req.params.id, req.body)
        .then((invoice)=> res.json(invoice))
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    invoiceService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};