const mongoose = require('mongoose');

const teachers = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    subject: {type:String, required: true},
}, {timestamps:true});

const Teachers = mongoose.model('TEACHERS', teachers);

module.exports = Teachers;