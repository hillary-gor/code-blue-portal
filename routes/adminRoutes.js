const express = require('express');
const router = express.Router();
const Admin = require('/models/Admin');

// Create a new admin
router.post('/', async (req, res) => {
    try {
        const admin = new Admin(req.body);
        await admin.save();
        res.status(201).send(admin);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Get all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).send(admins);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
