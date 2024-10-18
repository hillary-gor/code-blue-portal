const express = require('express');
const mongoose = require('mongoose');
const app = express();
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://cbmti-admin:c7LxFTwDzphKCqio@lms.2ts5hoe.mongodb.net/?retryWrites=true&w=majority&appName=Lms', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Routes
app.use('/students', studentRoutes);
app.use('/admins', adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const uri = "mongodb+srv://<db_username>:<db_password>@lms.2ts5hoe.mongodb.net/?retryWrites=true&w=majority&appName=Lms";