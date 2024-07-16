import React, { useState } from "react";

const EditTodoform = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-input-wrapper">
        <input
          type="text"
          value={value}
          placeholder="Update task"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Update Task
        </button>
      </div>
    </form>
  );
};

export default EditTodoform;
