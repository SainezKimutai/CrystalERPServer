const SalesSentEmail = require("../salesSentEmail/salesSentEmail.model.js").SalesSentEmail;

async function create(salesEmailParam){
    const salesemail = new SalesSentEmail(salesEmailParam);
    await salesemail.save();
    return SalesSentEmail.find({});
}

async function getAll() {
    return await SalesSentEmail.find({});
}

async function getOne(_id) {
    return SalesSentEmail.findById(_id);
}

async function update(id, emailParam) {
    let Email = await SalesSentEmail.findById(id);


    if (!Email) throw 'Email not Found';


    Object.assign(Email, emailParam);

    await Email.save();

    return await SalesSentEmail.find({});

}

async function _delete(id) {
    await SalesSentEmail.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
