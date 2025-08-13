import express from 'express';
import connectDB from './db/db.js';

const app= express();
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
});

app.listen(PORT, () => {
  console.log(`${GREEN}Server is running${RESET} on http://localhost:${PORT}`);
});
