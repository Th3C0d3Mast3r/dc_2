import express from 'express';
import connectDB from './db/db.js';
import cors from 'cors';

const app= express();
app.use(cors());
const conect = connectDB();

const PORT = 3000;
const GREEN='\x1b[32m';
const RESET='\x1b[0m';

app.get('/', (req, res) => {
  res.send('Hello World!');
}
)

app.get('/kshitij', (req, res)=>{
    res.send("This is KSHITIJ'S ROUTE");
});

app.get('/getDetails', (req, res) => {
  const id = req.query.id;
  mongoose.model('User').findById(id, (err, user) => {
    if (err) {
      return res.status(500).send('Error fetching user details');
    }
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  });
});

app.post('/addDetails', (req, res) => {
  const newUser = new mongoose.model('User')(req.body);
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).send('Error saving user details');
    }
    res.status(201).json(user);
  });
});

app.listen(PORT, () => {
  console.log(`${GREEN}Server is running${RESET} on http://localhost:${PORT}`);
});
