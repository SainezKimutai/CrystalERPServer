const calenderEventService = require("../services/calenderEvent.service.js");

exports.create = (req, res, next) => {
    calenderEventService.create(req.body)
        .then(events =>res.json(events))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    calenderEventService.getAll()
        .then(events => { res.json(events); })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    calenderEventService.getOne(req.params.id)
            .then(events => events ? res.json(events): res.sendStatus(404))
            .catch(err => next(err));
};

exports.update = (req, res, next) => {
    calenderEventService.update(req.params.id, req.body)
        .then((events)=> {res.json(events);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    calenderEventService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
