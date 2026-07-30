import { useState, useEffect, useRef } from "react";

export default function App() {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  async function getData() {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();
    console.log(data);
    setTodos(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    // packages up the todo with a input value
    const todo = {
      text: inputRef.current.value
    };

    // send this data as a POST request
    const response = await fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const newTodo = await response.json();

    console.log(todo);

    //resets the input;s value
    inputRef.current.value = "";
    //focus on the input
    inputRef.current.focus();

    //retrieve our latest data again
    getData();

    // updating the state with our new todo
    // setTodos([...todos, newTodo]);

  }

  async function handleDelete(id) {
    console.log(id);
    //delete the todo we clicked on using its id
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: 'DELETE'
    });

    // remove the deleted todo from state
    setTodos(todos.filter(todo => todo._id !== id));

    //remove the todo item from our state
  }

  return (
    <div>


      <h1>To-Do List</h1>


      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>


      <ul>
        {todos.map((todo) =>
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => { }}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>x</button>
          </li>
        )}
      </ul>
    </div>
  )
}