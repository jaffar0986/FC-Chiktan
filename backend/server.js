import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import players from './data/Players.js';
const port = process.env.PORT || 5000;

const app = express();

app.get('/',(req, res) => {
    res.send('API is running...')
});

app.get('/api/players',(req, res) => {
    res.json(players);
});

app.get('/api/players/:id',(req, res) => {
    const player = players.find((p) => p._id === req.params.id)
    res.json(player);
});

app.listen(port, () => console.log(`Server runnung on ${port}`));