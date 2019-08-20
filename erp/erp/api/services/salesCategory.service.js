const SalesCategory = require("../salesCategory/salesCategory.model.js").SalesCategory;

// Create Sales Category
async function create(salesCatParam){
    // Validate
    if (await SalesCategory.findOne({ name: salesCatParam.name })) {
        return;
    }

    const salescat = new SalesCategory(salesCatParam);

    // Save sales Cat
    await salescat.save();
    
    return SalesCategory.findOne({ name: salescat.name });

}


// Get All sales cat
async function getAll() {
    return await SalesCategory.find({});
}


// Get One
async function getOne(_id) {
    return SalesCategory.findById(_id);
}


// Update Opp
async function update(id, catParam) {
    let Cat = await SalesCategory.findById(id);

    // Validate
    if (!Cat) throw 'Category not Found';

    // Copy oppParam
    Object.assign(Cat, catParam);

    await Cat.save();

}


//Delete sales cat
async function _delete(id) {
    await SalesCategory.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

