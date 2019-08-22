const projectService = require("../services/project.service.js");

// Create
exports.create = (req, res, next) => {

    // console.log(req.body);
    projectService.create(req.body)
        .then(proj => proj ? res.json(proj) : res.status(409).json({ message: 'Project already Exists' }))
        .catch(err => next(err));
 
};


// Get All
exports.getAll = (req, res, next) => {
    projectService.getAll()
        .then(projs => { res.json(projs); })
        .catch(err => next(err));
};



// Get One
exports.getOne = (req, res, next) => {
    // console.log(req.params.id);
    projectService.getOne(req.params.id)
            .then(projs => projs ? res.json(projs) : res.sendStatus(404))
            .catch(err => next(err));
};



// Get One
exports.oneToGantt = (req, res, next) => {
    // console.log(req.params.id);
    projectService.getOne(req.params.id)
        .then(project =>{
            if(project){
                let i = 1;
                let task = project.task.filter(task=>{
                    return true
                }).map(task=>
                        { task.taskStartDate = new Date(task.taskStartDate);
                            return task={
                            id: task._id,
                            text: task.taskName,
                            start_date: task.taskStartDate.getUTCDate() + "-" +
                                (task.taskStartDate.getUTCMonth() +1) + "-" + task.taskStartDate.getUTCFullYear(),
                            duration: task.taskDuration,
                            progress: 0.5}});

                res.json(task)
            }else {
                res.sendStatus(404)
            }
            }).catch(err => next(err));
};




// Update
exports.update = (req, res, next) => {
    projectService.update(req.params.id, req.body)
        .then((proj)=> res.json(proj))
        .catch(err => next(err));
};



// Delete
exports.delete = (req, res, next) => {
    projectService.delete(req.params.id)
        .then(()=> res.json({}))
        .catch(err => next(err));
};






