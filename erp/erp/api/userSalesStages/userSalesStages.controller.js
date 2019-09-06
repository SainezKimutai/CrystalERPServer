const userSalesStagesService = require("../services/userSalesStages.service");


exports.create = (req, res, next) => {
    userSalesStagesService.create(req.body)
        .then(stage => stage ?  res.json(stage): res.status(409).json({ message: 'Stage already Exists' }))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    userSalesStagesService.getAll()
        .then(stages => { res.json(stages);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    userSalesStagesService.getOne(req.params.id)
        .then(stage => stage ? res.json(stage): res.sendStatus(404))
        .catch(err => next(err));
};


exports.getByUser = (req, res, next) => {
    userSalesStagesService.getByUser(req.params.id)
        .then(stage => stage ? res.json(stage): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    userSalesStagesService.update(req.params.id, req.body)
        .then((stage)=> {res.json(stage);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    userSalesStagesService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};

