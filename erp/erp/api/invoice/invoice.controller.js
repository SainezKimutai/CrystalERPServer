const invoiceService = require("../services/invoice.service.js");
const mailService = require("../services/mail.service");

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

exports.sendInvoice= (req, res, next) => {
    mailService.sendInvoiceToClient(req.body)
        .then(e =>res.json({}))
        .catch(err => {res.sendStatus(401); console.log(err)});
};

exports.upload = (req, res, next) => {
  invoiceService.upload(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.remove = (req, res, next) => {
  invoiceService.remove(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
