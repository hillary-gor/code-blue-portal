const express = require('express');
const Admin = require('/models/Admin');
const Student = require('/models/Student');
const router = express.Router();

// Admin sign-in route
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ msg: 'Admin not found' });

    if (password !== admin.password) return res.status(400).json({ msg: 'Invalid credentials' });

    res.json({ admin });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Admin adds/updates student details
router.post('/student', async (req, res) => {
  const { name, email, password, courses } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) {
      student.name = name;
      student.password = password;
      student.courses = courses;
    } else {
      student = new Student({ name, email, password, courses });
    }
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
