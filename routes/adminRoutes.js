const express = require('express');
const Student = require('/models/Student');
const router = express.Router();

// Student sign-in route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(400).json({ msg: 'Student not found' });
    
    // In a real app, you should use bcrypt for password comparison
    if (password !== student.password) return res.status(400).json({ msg: 'Invalid credentials' });

    res.json({ student });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get student details
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ msg: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
