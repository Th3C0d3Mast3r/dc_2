import express from 'express';
import connectDB from './db/db.js';
import cors from 'cors';
import Student from './db/student.model.js';

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Needed to parse JSON in POST requests

const PORT = 3000;
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';

// ✅ Connect to database once
connectDB();

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Get details by query param
app.get('/getDetails', async (req, res) => {
    try {
        const id = req.query.id;
        const student = await Student.findOne({ uid: id });
        if (!student) {
            return res.status(404).send('User not found');
        }
        res.json(student);
    } catch (err) {
        res.status(500).send('Error fetching user details');
    }
});

// Add details
app.post('/addDetails', async (req, res) => {
    try {
        const newUser = new Student(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send('Error saving user details');
    }
});

app.listen(PORT, () => {
    console.log(`${GREEN}Server is running${RESET} on http://localhost:${PORT}`);
});
