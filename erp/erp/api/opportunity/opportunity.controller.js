const opportunityService = require("../services/opportunity.service.js");

exports.create = (req, res, next) => {
    opportunityService.create(req.body)
        .then(opp => opp ?  res.json(opp): res.status(409).json({ message: 'Lead already Exists' }))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    opportunityService.getAll()
        .then(opps => { res.json(opps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    opportunityService.getOne(req.params.id)
            .then(Opp => Opp ? res.json(Opp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    opportunityService.update(req.params.id, req.body)
        .then((Opp)=> {res.json(Opp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    opportunityService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
