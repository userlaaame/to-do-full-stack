import express from 'express';

import { getTodos, createTodo, deleteTodo, updateTodo } from '../controllers/todo.js'

const router = express.Router();

//get todos
router.get('/', getTodos)

// POST create a todo
router.post('/', createTodo)

router.delete('/:id', deleteTodo)

//PUT updating a todo
router.put('/:id', updateTodo);

export default router;