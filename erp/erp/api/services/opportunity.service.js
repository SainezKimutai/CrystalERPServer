const Opportunity = require("../opportunity/opportunity.model.js").Opportunity;


async function create(opportunityParam){
    if (await Opportunity.findOne({ projectName: opportunityParam.projectName, clientName: opportunityParam.clientName })) {
        return;
    }
    
    let opp = new Opportunity(opportunityParam);
  
    await opp.save();
    
    return Opportunity.findOne({ projectName: opp.projectName, clientName: opp.clientName });

}


async function getAll() {
    return await Opportunity.find({});
}



async function getOne(_id) {
    return Opportunity.findById(_id);
}


async function update(id, oppParam) {
    let Opp = await Opportunity.findById(id);


    if (!Opp) throw 'Project not Found';

    Object.assign(Opp, oppParam);

    await Opp.save();

    return Opportunity.findById(id);

}


async function _delete(id) {
    await Opportunity.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

