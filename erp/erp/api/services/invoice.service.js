const Invoice = require("../invoice/invoice.model.js").Invoice;

async function create(invoiceParam){   
    const invoice = new Invoice(invoiceParam);
    await invoice.save();
    return Invoice.findOne({ _id: invoice._id });
    
}

async function getAll() {
    return await Invoice.find({});
}

async function getOne(_id) {
    return Invoice.findById(_id);
}

async function update(id, invParam) {
    let Inv = await Invoice.findById(id);

   
    if (!Inv) throw 'Invoice not Found';

    
    Object.assign(Inv, invParam);

    await Inv.save();

    return await  Invoice.findById(id);

}

async function _delete(id) {
    await Invoice.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };