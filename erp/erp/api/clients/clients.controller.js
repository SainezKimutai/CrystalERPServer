const clientService = require("../services/client.service");
const mailService = require("../services/mail.service");


exports.create = (req, res, next) => {
    clientService.create(req.body)
        .then(client => client ?  res.status(200).json({ message: 'New Client Added' }): res.status(200).json({ message: 'New deal to existing client' }))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    clientService.getAll()
        .then(clients => { res.json(clients);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    clientService.getOne(req.params.id)
        .then(client => client ? res.json(client): res.sendStatus(404))
        .catch(err => next(err));
};

exports.getByName = (req, res, next) => {
    clientService.getByName(req.params.name)
        .then(client => client ? res.json(client):  res.status(401).json({ message: 'No Client'}))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    clientService.update(req.params.id, req.body)
        .then((client)=> {res.json(client);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    clientService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};


exports.sendMail = (req, res, next) => {
    mailService.sendMailToClient(req.body)
        .then(e =>res.json({}))
        .catch(err => res.sendStatus(401));
};

