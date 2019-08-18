const Teams = require("../teams/teams.model.js").Teams;

// Create Team
async function create(teamParam){
    // Validate
    if (await Teams.findOne({ name: teamParam.name })) {
        // throw `Team ${teamParam.name} already exists`;
        return;
    }

    const team = new Teams(teamParam);

    // Save User
    await team.save();
    
    return await Teams.findOne({ name: team.name });

}


// Get All Teams
async function getAll() {
    return await Teams.find({});
}


//Delete Team
async function _delete(id) {
    await Teams.deleteOne({_id: id});
}

module.exports = { create, getAll, delete: _delete };

