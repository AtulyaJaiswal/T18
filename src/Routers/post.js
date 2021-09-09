const express = require('express');
const router = express.Router();
const Students = require('../Models/student');
const Teachers = require('../Models/teacher');

//REGISTRATION FOR STUDENTS
router.post('/registerStudent', async (req,res) => {

    const { name, email, classes, section, assignedTeacher } = req.body;

    try {
        
        if(!name || !email || !classes || !section || !assignedTeacher){
            return res.status(204).json({message: "Fill all the data"});
        }
        if(classes !== "8" && classes !== "9"){
            return res.status(406).json({message: "Only Class 8 and 9 allowed"});
        }
        if(section !== "A" && section !== "B" && section !== "C"){
            return res.status(406).json({message: "Only Section A, B and C exist"});
        }

        const data = new Students({ name, email, classes, section, assignedTeacher});
        const dataSave = await data.save();

        if(dataSave){
            return res.status(201).json({ message: "Student Registered Successfully" });
        }
        else{
            return res.status(400).json({ error: "Failed to Register" });
        }

    } catch (error) {
        console.log(error);
    }

});

//REGISTRATION FOR TEACHERS
router.post('/registerTeacher', async (req,res) => {

    const { name, email, subject } = req.body;

    try {
        
        if(!name || !email || !subject){
            return res.status(204).json({message: "Fill all the data"});
        }
        const data = new Teachers({ name, email, subject});
        const dataSave = await data.save();

        if(dataSave){
            return res.status(201).json({ message: "Teacher Registered Successfully" });
        }
        else{
            return res.status(400).json({ error: "Failed to Register" });
        }

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;