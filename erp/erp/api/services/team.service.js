const Teams = require("../teams/teams.model.js").Teams;


async function create(teamParam){
 
    if (await Teams.findOne({ name: teamParam.name })) {
        return;
    }

    const team = new Teams(teamParam);

    await team.save();
    
    return Teams.findOne({ name: team.name });

}


async function getAll() {
    return await Teams.find({});
}


async function getOne(_id) {
    return Teams.findById(_id);
}


async function update(id, teamParam) {
    let team = await Teams.findById(id);

  
    if (!team) throw 'Team not Found';


    Object.assign(team, teamParam);

    await team.save();

    return Teams.findById(id);

}



async function _delete(id) {
    await Teams.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

