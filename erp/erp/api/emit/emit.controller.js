const User = require('../users/users.model.js');
const Project = require("../projects/projects.model.js").Project;
const Opportunity = require('../opportunity/opportunity.model.js').Opportunity;
const Teams = require('../teams/teams.model.js').Teams;
const CustomService = require('../customary/customary.model.js').CustomService;
const SalesCategory = require("../salesCategory/salesCategory.model.js").SalesCategory;
const UserSalesStage = require("../userSalesStages/userSalesStages.model.js").UserSalesStage;
const Client = require("../clients/clients.model.js").Client;


module.exports = function(app, io){

    User.find({})
        .then((data)=>{ io.emit('/listUsers', data)})
        .catch((err)=>{ console.log(err) });


    Project.find({})
        .then((data)=>{ io.emit('/listProjects', data)})
        .catch((err)=>{ console.log(err) });
    

    Opportunity.find({})
        .then((data)=>{ io.emit('/listOppProjects', data);})
        .catch((err)=>{ console.log(err) });


    Teams.find({})
        .then((data)=>{ io.emit('/listTeams', data) })
        .catch((err)=>{ console.log(err) });


    CustomService.find({})
        .then((data)=>{ io.emit('/listCustomServices', data)})
        .catch((err)=>{ console.log(err) });


    SalesCategory.find({})
        .then((data)=>{ io.emit('/listSalesCategory', data)})
        .catch((err)=>{ console.log(err) });


    UserSalesStage.find({})
        .then((data)=>{ io.emit('/listUserSalesStages', data)})
        .catch((err)=>{ console.log('Could Not emit User Sales Stages') });

    Client.find({})
        .then((data)=>{ io.emit('/listClients', data)})
        .catch((err)=>{ console.log('Could Not emit Clients') });
    
};

