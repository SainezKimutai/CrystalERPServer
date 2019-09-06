const clientService = require("../services/client.service");


exports.create = (req, res, next) => {
    clientService.create(req.body)
        .then(client => client ?  res.json(client): res.status(409).json({ message: 'Client already Exists' }))
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
