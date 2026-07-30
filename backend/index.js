import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import connectDB from './db.js';

import Todo from './models/todo.js'

const app = express();

const port = 3000;

// allow requests from frontend
app.use(cors());

// format incoming data to json
app.use(express.json());

//get todos
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.json(todos);
    } catch (e) {
        console.error('Error fetching todos:', e);
        res.status(500).json({ error: e.message });
    }
})

// POST create a todo
app.post('/api/todos', async (req, res) => {
    console.log(req.body);
    const todo = await Todo.create(req.body);
    res.json(todos);
})

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log('Listening on port: ', port);
    })
}

startServer();