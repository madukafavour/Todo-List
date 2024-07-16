import React, { useState } from "react";
import Todoforms from "./Todoforms";
import EditTodoform from "./EditTodoform";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

uuidv4();

const Todowrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, completed: !todo.completed} :todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id!== id))
    }

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id? 
        {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id ? 
          {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    // return { addTodo, toggleComplete, deleteTodo, editTodo };

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Todoforms addTodo={addTodo} /> 
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoform editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={index}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />
        )
      ))
      }
    </div>
  );
};


export default Todowrapper;
