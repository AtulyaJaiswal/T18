const express = require('express');
const router = express.Router();
const Students = require('../Models/student');

//If we allow a student to edit their profile after logging in then we 
//can do that more easily by JSONWEBTOKEN  by storing cookies
router.put('/updateStudentData', async (req, res) => {
    const { name, email, classes, section, assignedTeacher } = req.body;

    try {
        if (!classes && !section && !assignedTeacher) {
            Students.updateOne({ name: name }, { $set: { email: email } }, function (err, docs) {
                if (err) { console.log(err) }
                else {
                    return res.status(200).json({ message: "Data Updated Successfully" });
                }
            });
        }
        else if (!email && !section && !assignedTeacher) {
            Students.updateOne({ name: name }, { $set: { classes: classes } }, function (err, docs) {
                if (err) { console.log(err) }
                else {
                    return res.status(200).json({ message: "Data Updated Successfully" });
                }
            });
        }
        else if (!email && !classes && !assignedTeacher) {
            Students.updateOne({ name: name }, { $set: { section: section } }, function (err, docs) {
                if (err) { console.log(err) }
                else {
                    return res.status(200).json({ message: "Data Updated Successfully" });
                }
            });
        }
        else if (!email && !section && !section) {
            Students.updateOne({ name: name }, { $set: { assignedTeacher: assignedTeacher } }, function (err, docs) {
                if (err) { console.log(err) }
                else {
                    return res.status(200).json({ message: "Data Updated Successfully" });
                }
            });
        }
        else {
            return res.status(400).json({ message: "Bad Request" })
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;