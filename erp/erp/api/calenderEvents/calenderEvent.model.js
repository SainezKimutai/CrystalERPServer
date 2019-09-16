const mongoose = require('mongoose');

const calenderEventSchema = new mongoose.Schema({
    title: String,
    assignedUser: String,
    projectId: { type: mongoose.Schema.Types.Mixed},
    start: Date,
    end: Date,
    color: {
      primary: String,
      secondary: String
    },
    allDay: Boolean,
    draggable: Boolean,
    resizable: {
      beforeStart: Boolean,
      afterEnd: Boolean
    }
});

const CalenderEvent = mongoose.model('CalenderEvent', calenderEventSchema);

module.exports = { CalenderEvent : CalenderEvent };