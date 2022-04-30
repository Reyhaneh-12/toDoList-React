import { useState } from 'react'
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      complected: false
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  }

  return (
    <div className="App">
      <div className="Card">
        <header className="Header">
          <h1 className="headerTitle">To Do List</h1>
        </header>

        <form onSubmit={formHandler} className="addTodoForm">
          <h3 className="addTitle">Add To Do:</h3>
          <input type="text" onChange={ event => { setTodo(event.target.value) }} value={todo} className="addInput" placeholder="add your text to do..." />
          <button type="submit" className="addBtn">Add To Do</button>
        </form>

        

      </div>
    </div>
  );
}

export default App;
