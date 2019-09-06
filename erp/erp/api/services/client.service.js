const Client = require("../clients/clients.model.js").Client;


async function create(clientParam){
    if (await Client.findOne({ name: clientParam.name })) {
        return;
    }

    let client = new Client(clientParam);

    await client.save();
    
    return Client.findOne({ name: client.name });

}


async function getAll() {
    return await Client.find({});
}



async function getOne(_id) {
    return Client.findById(_id);
}


async function update(id, clientParam) {
    let client = await Client.findById(id);


    if (!client) throw 'Client not Found';

   
    Object.assign(client, clientParam);

    await client.save();

    return Client.findById(id);

}


async function _delete(id) {
    await Client.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

