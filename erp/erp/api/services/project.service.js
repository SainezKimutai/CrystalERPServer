const Project = require("../projects/projects.model.js").Project;


async function create(projectParam){
    
    if (await Project.findOne({ projectName: projectParam.projectName, clientName: projectParam.clientName })) {
        return;
    }

    let proj = new Project(projectParam);

  
    await proj.save();
    
    return Project.findOne({ projectName: proj.projectName, clientName: proj.clientName });

}


async function getAll() {
    return await Project.find({});
}


async function getOne(_id) {
    return Project.findById(_id);
}


async function update(id, projParam) {
    let Proj = await Project.findById(id);

    if (!Proj) throw 'Project not Found';

    Object.assign(Proj, projParam);

    await Proj.save();

    return Project.findById(id);
}


async function _delete(id) {
    await Project.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
