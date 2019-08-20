const CustomService = require("../customary/customary.model.js").CustomService;

// Create Custom Service
async function create(serviceParam){
    // Validate
    if (await CustomService.findOne({ serviceName: serviceParam.serviceName })) {
        // throw `Team ${teamParam.name} already exists`;
        return;
    }

    const service = new CustomService(serviceParam);

    // Save custom service
    await service.save();
    
    return CustomService.findOne({ serviceName: service.serviceName });

}


// Get All custom services
async function getAll() {
    return await CustomService.find({});
}


//Delete service
async function _delete(id) {
    await CustomService.deleteOne({_id: id});
}

module.exports = { create, getAll, delete: _delete };

