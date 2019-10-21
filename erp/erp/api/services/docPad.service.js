const DocPad = require("../docPad/docPad.model.js").DocPad;

async function create(docPadParam){   
    const docpad = new DocPad(docPadParam);
    await docpad.save();
    return DocPad.findOne({ _id: docpad._id });
    
}

async function getAll() {
    return await DocPad.find({});
}

async function getOne(_id) {
    return DocPad.findById(_id);
}

async function update(id, docParam) {
    let Doc = await DocPad.findById(id);

   
    if (!Doc) throw 'Note not Found';

    
    Object.assign(Doc, docParam);

    await Doc.save();

    return await  DocPad.findById(id);

}

async function _delete(id) {
    await DocPad.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };