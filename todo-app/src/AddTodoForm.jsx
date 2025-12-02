import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new to-do..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary ms-2">Add</button>
    </form>
  );
};

export default AddTodoForm;
