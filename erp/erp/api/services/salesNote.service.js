const SalesNote = require("../salesNote/salesNote.model.js").SalesNote;

async function create(salesNoteParam){   
    console.log(salesNoteParam)
    const salesnote = new SalesNote(salesNoteParam);
    console.log(salesnote)
    await salesnote.save();
    return SalesNote.find({});
}

async function getAll() {
    return await SalesNote.find({});
}

async function getOne(_id) {
    return SalesNote.findById(_id);
}

async function update(id, noteParam) {
    let Note = await SalesNote.findById(id);

   
    if (!Note) throw 'Note not Found';

    
    Object.assign(Note, noteParam);

    await Note.save();

    return await SalesNote.find({});

}

async function _delete(id) {
    await SalesNote.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };