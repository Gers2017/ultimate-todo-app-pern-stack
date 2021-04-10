import React, { Fragment, useState } from "react";
//components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";

function App() {
  const [todoId, setTodoId] = useState(-1);
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState("");

  async function onSumbitEdit() {
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      hideEdit();
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  }

  function showEdit(id, newDescription) {
    setTodoId(id);
    console.log(newDescription);
    setDescription(newDescription);
    setIsEdit(true);
  }

  function hideEdit() {
    setIsEdit(false);
  }

  return (
    <Fragment>
      <div className="container mx-auto px-4 font-sans text-base">
        <InputTodo />
        <ListTodo showEdit={showEdit} />
        <EditTodo
          isEdit={isEdit}
          todoDescription={description}
          setTodoDesription={setDescription}
          onSubmitEdit={onSumbitEdit}
          onCancel={hideEdit}
        />
      </div>
    </Fragment>
  );
}

export default App;
