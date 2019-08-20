const Opportunity = require("../opportunity/opportunity.model.js").Opportunity;

// Create Opportunity
async function create(opportunityParam){
    // Validate
    if (await Opportunity.findOne({ projectName: opportunityParam.projectName, clientName: opportunityParam.clientName })) {
        return;
    }

    let opp = new Opportunity(opportunityParam);

    // Save Opp
    await opp.save();
    
    return Opportunity.findOne({ projectName: opp.projectName, clientName: opp.clientName });

}


// Get All Opps
async function getAll() {
    return await Opportunity.find({});
}


// Get One
async function getOne(_id) {
    return Opportunity.findById(_id);
}


// Update Opp
async function update(id, oppParam) {
    let Opp = await Opportunity.findById(id);

    // Validate
    if (!Opp) throw 'Project not Found';

    // Copy oppParam
    Object.assign(Opp, oppParam);

    await Opp.save();

    return Opportunity.findById(id);

}



//Delete Opp
async function _delete(id) {
    await Opportunity.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

