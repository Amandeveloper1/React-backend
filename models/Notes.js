const mongoose = require('mongoose')
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: String,
    discription: String,
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = mongoose.model('note', NoteSchema)