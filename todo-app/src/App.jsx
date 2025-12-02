import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Deploy the App', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    const newText = prompt('Enter new text');
    if (newText !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">My To-Do List</h1>
              <AddTodoForm addTodo={addTodo} />
              <ul className="list-group list-group-flush mt-3">
                {todos.map(todo => (
                  <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
