const express = require('express');
const router = express.Router();
const Students = require('../Models/student');
const Teachers = require('../Models/teacher');

router.get('/listOfAllTeachers', async (req, res) => {

    try {
        Teachers.find()
            .then((list) => res.json(list))
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (error) {
        console.log(error);
    }

});

router.get('/listOfAllStudents', async (req, res) => {

    try {
        Students.find()
            .then((list) => res.json(list))
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (error) {
        console.log(error);
    }

});

router.get('/listOfTeachers', async (req, res) => {

    const { subject } = req.body;

    try {
        Teachers.find({ subject: subject })
            .then((list) => res.json(list))
            .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (error) {
        console.log(error);
    }

});

router.get('/listOfStudents', async (req, res) => {

    const { classes, section } = req.body;

    try {
        if (!section) {
            Students.find({ classes: classes })
                .then((list) => res.json(list))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        }
        else if (!classes) {
            Students.find({ section: section })
                .then((list) => res.json(list))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        }
        else {
            Students.find({ classes: classes, section: section })
                .then((list) => res.json(list))
                .catch((err) => res.status(400).json(`Error: ${err}`));
        }
    } catch (error) {
        console.log(error)
    }
});

router.get('/listOfStudentsByTeacher', async (req,res) => {

    const{assignedTeacher} = req.body;

    try {
        Students.find({ assignedTeacher : assignedTeacher })
                .then((list) => res.json(list))
                .catch((err) => res.status(400).json(`Error: ${err}`));
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;