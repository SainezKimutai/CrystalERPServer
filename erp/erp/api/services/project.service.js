const Project = require("../projects/projects.model.js").Project;

// Create Project
async function create(projectParam){
    // Validate
    if (await Project.findOne({ projectName: projectParam.projectName, clientName: projectParam.clientName })) {
        return;
    }

    let proj = new Project(projectParam);

    // Save proj
    await proj.save();
    
    return await Project.findOne({ projectName: proj.projectName, clientName: proj.clientName });

}


// Get All Projects
async function getAll() {
    return await Project.find({});
}


// Get One
async function getOne(_id) {
    return await Project.findById(_id);
}


// Update Proj
async function update(id, projParam) {
    let Proj = await Project.findById(id);

    // Validate
    if (!Proj) throw 'Project not Found';

    // Copy oppParam
    Object.assign(Proj, projParam);

    await Proj.save();

    return await Project.findById(id);
}



//Delete Opp
async function _delete(id) {
    await Project.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };