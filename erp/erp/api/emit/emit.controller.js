const Project = require("../projects/projects.model.js").Project;
const Opportunity = require('../opportunity/opportunity.model.js').Opportunity;
const Teams = require('../teams/teams.model.js').Teams;
const CustomService = require('../customary/customary.model.js').CustomService;
const SalesCategory = require("../salesCategory/salesCategory.model.js").SalesCategory;


module.exports = function(app, io){

setInterval(()=>{

    // Send Custom Services
    Project.find({})
        .then((data)=>{ io.emit('/listProjects', data)})
        .catch((err)=>{ console.log(err) });
    

    // Send Opportunity data
    Opportunity.find({})
        .then((data)=>{ io.emit('/listOppProjects', data) })
        .catch((err)=>{ console.log(err) });

    // Send teams
    Teams.find({})
        .then((data)=>{ io.emit('/listTeams', data) })
        .catch((err)=>{ console.log(err) });

    // Send Custom Services
    CustomService.find({})
        .then((data)=>{ io.emit('/listCustomServices', data)})
        .catch((err)=>{ console.log(err) });

    // Send Custom Services
    SalesCategory.find({})
        .then((data)=>{ io.emit('/listSalesCategory', data)})
        .catch((err)=>{ console.log(err) });
    

}, 700);




};

