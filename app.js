const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://cbmti-admin:c7LxFTwDzphKCqio@lms.2ts5hoe.mongodb.net/?retryWrites=true&w=majority&appName=Lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/students', studentRoutes);
app.use('/api/admins', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
