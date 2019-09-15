const CalenderEvent = require("../calenderEvents/calenderEvent.model.js").CalenderEvent;


async function create(eventParam){

    let event = new CalenderEvent(eventParam);

    await event.save();
    
    return await CalenderEvent.find({});

}


async function getAll() {
    return await CalenderEvent.find({});
}



async function getOne(_id) {
    return CalenderEvent.findById(_id);
}



async function update(id, eventParam) {
    let Event = await CalenderEvent.findById(id);


    if (!Event) throw 'Event not Found';

    Object.assign(Event, eventParam);

    await Event.save();

    return await CalenderEvent.find({});

}



async function _delete(id) {
    await CalenderEvent.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };

