import React, { useState, useEffect } from "react";
import Head from "./TodoHead";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function ListTodo({ showEdit }) {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (todo_id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${todo_id}`, {
        method: "DELETE",
      });
      console.log(response);
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.todo_id !== todo_id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="grid grid-cols-1 grid-flow-row my-6">
      <Head />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.todo_id}
            description={todo.description}
            onEdit={() => showEdit(todo.todo_id, todo.description)}
            onDelete={() => deleteTodo(todo.todo_id)}
          />
        ))
      ) : (
        <></>
      )}
      <EditTodo />
    </div>
  );
}
