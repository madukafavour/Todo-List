import React, { useState } from "react";

const Todoforms = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-input-wrapper">
        <input
          type="text"
          value={value}
          placeholder="what is the task for today"
          className="todo-input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Todoforms;
