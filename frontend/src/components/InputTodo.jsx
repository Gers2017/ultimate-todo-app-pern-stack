import React, { useState } from "react";
import Button from "./Button";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  async function onSumbit(e) {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <header className="text-center my-16">
        <h1 className="text-blue-600 text-4xl mb-4 font-bold">
          The Ultimate Todo App
        </h1>
        <h3 className="uppercase text-gray-400 text-xl font-bold">
          Pern stack
        </h3>
      </header>
      <form className="flex justify-center mt-5" onSubmit={(e) => onSumbit(e)}>
        <input
          className="inline-block w-9/12 border-2 border-gray-400 mr-4 px-3 py-2"
          type="text"
          name="addTodo"
          id="addTodo"
          placeholder="New todo"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button text="Add todo" />
      </form>
    </>
  );
}
