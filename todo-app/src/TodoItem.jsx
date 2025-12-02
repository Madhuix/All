import React from 'react';
import { FiCheck, FiEdit, FiTrash2 } from 'react-icons/fi';

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-light' : ''}`}>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <div>
        <button className="btn btn-sm btn-success me-2" onClick={() => toggleComplete(todo.id)}>
          <FiCheck />
        </button>
        <button className="btn btn-sm btn-warning me-2" onClick={() => editTodo(todo.id)}>
          <FiEdit />
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo.id)}>
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
