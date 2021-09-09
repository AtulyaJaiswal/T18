const mongoose = require('mongoose');

const students = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    classes: {type:Number, required: true},
    section: {type:String, required: true},
    assignedTeacher: {type:String, required: true},
}, {timestamps:true});

const Students = mongoose.model('Students', students);

module.exports = Students;