const UserSalesStage = require("../userSalesStages/userSalesStages.model").UserSalesStage;


async function create(stageParam){
    if (await UserSalesStage.findOne({ name: stageParam.name, userId: stageParam.userId })) {
        return;
    }

    let userSalesStage = new UserSalesStage(stageParam);

    await userSalesStage.save();
    
    return UserSalesStage.findOne({ name: stageParam.name, userId: stageParam.userId });

}


async function getAll() {
    return await UserSalesStage.find({});
}



async function getOne(_id) {
    return UserSalesStage.findById(_id);
}


async function getByUser(id) {
    return UserSalesStage.find({ userId: id});
}



async function update(id, stageParam) {
    let userSalesStage = await UserSalesStage.findById(id);


    if (!userSalesStage) throw 'stage not Found';

   
    Object.assign(userSalesStage, stageParam);

    await userSalesStage.save();

    return UserSalesStage.findById(id);

}


async function _delete(id) {
    await UserSalesStage.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, getByUser, update, delete: _delete };

