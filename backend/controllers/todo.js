import Todo from '../models/todo.js'


//GET/api/todos
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.status(200).json(todos);
    } catch (e) {
        console.error('Error fetching todos:', e);
        res.status(500).json({ error: e.message });
    }
}


export const createTodo = async (req, res) => {
    try {
        console.log(req.body);
        const todo = await Todo.create(req.body);
        res.json(todo);
    } catch (e) {
        console.error('Error creating todo:', e);
        res.status(500).json({ error: e.message });
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndDelete(req.params.id);
        console.log(result);
        res.json(result);
    } catch (e) {
        console.error('Error deleting todo:', e);
        res.status(500).json({ error: e.message });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(result);
        res.json(result);
    } catch (e) {
        console.error('Error updating todo:', e);
        res.status(500).json({ error: e.message });
    }
}

