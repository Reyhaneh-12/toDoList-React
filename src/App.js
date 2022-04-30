import { useState } from 'react'
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [textEditing, setTextEditing] = useState("");

  

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

  const checkHandler = (id) => {
    const updatedTodo = todos.map(todo => {
      if(todo.id === id)
        todo.complected = !todo.complected;
      return todo;
      });
    setTodos(updatedTodo);
}

  const deleteHandler = (id) => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  }

  const editHandler = (id) => {
      const updatedTodos = todos.map(todo => {
        if(todo.id === id){
          todo.text = textEditing;
        }
        return todo;
      })
      setTodos(updatedTodos);
      setTodoEditing(null);
      setTextEditing("");

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

        {
          todos.map((todo) => 
            <div key={todo.id} className="todo">
              <div className="contextTodo">
                <input type="checkbox" onChange={() => checkHandler(todo.id)} checked={todo.complected} className="ckeckTodo" />
                {
                  todoEditing === todo.id ?
                    <input type="text" onChange={(event) => setTextEditing(event.target.value)} value={textEditing} className="inputTodo" /> :
                    <div className="textTodo">{todo.text}</div>
                }
              </div>
              <div className="actionTodo">
                <button onClick={() => deleteHandler(todo.id)} className="actionBtn" >Delete</button>
                {
                  todoEditing === todo.id ?
                  <button onClick={() => editHandler(todo.id)} className="actionBtn" >Submit Edit</button> :
                  <button onClick={() => setTodoEditing(todo.id)} className="actionBtn" >Editing</button>
                }
              </div>
            </div>
          )
        }

      </div>
    </div>
  );
}

export default App;
