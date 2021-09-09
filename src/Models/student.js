const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const students = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true},
    classes: {type:Number, required: true},
    section: {type:String, required: true},
    assignedTeacher: {type:String, required: true},
    tokens: [{ token: { type: String, required: true } }],
}, {timestamps:true});

students.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (err) { console.log(err) }
}

const Students = mongoose.model('Students', students);

module.exports = Students;