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
// Get One
async function getOne(id) {
    return CustomService.findById(id);
}


// Get All custom services
async function getAll() {
    return await CustomService.find({});
}


// Update Opp
async function update(id, serviceParam) {
    let service = await CustomService.findById(id);

    // Validate
    if (!service) throw 'Service not Found';

    // Copy oppParam
    Object.assign(service, serviceParam);

    await service.save();

    return CustomService.findById(id);
}



//Delete service
async function _delete(id) {
    await CustomService.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

