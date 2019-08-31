const SalesCategory = require("../salesCategory/salesCategory.model.js").SalesCategory;


async function create(salesCatParam){
   
    if (await SalesCategory.findOne({ name: salesCatParam.name })) {
        return;
    }

    const salescat = new SalesCategory(salesCatParam);


    await salescat.save();
    
    return SalesCategory.findOne({ name: salescat.name });

}



async function getAll() {
    return await SalesCategory.find({});
}


async function getOne(_id) {
    return SalesCategory.findById(_id);
}



async function update(id, catParam) {
    let Cat = await SalesCategory.findById(id);

   
    if (!Cat) throw 'Category not Found';

    
    Object.assign(Cat, catParam);

    await Cat.save();

    return await SalesCategory.find({});

}



async function _delete(id) {
    await SalesCategory.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

