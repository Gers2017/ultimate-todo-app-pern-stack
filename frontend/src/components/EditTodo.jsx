import React from "react";
import Button from "./Button";

export default function EditTodo({
  isEdit,
  todoDescription,
  setTodoDesription,
  onSubmitEdit,
  onCancel,
}) {
  return (
    <>
      {isEdit ? (
        <div className="fixed bg-gray-800 bg-opacity-80 top-0 left-0 z-10 w-full h-full">
          <div className="sticky top-1/4 z-20 rounded-lg shadow-md bg-gray-100 px-10 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit todo</h2>
            <input
              className="block w-full border border-gray-400 mr-4 p-2 mb-5 text-gray-600"
              type="text"
              name="editTodo"
              id="editTodo"
              value={todoDescription}
              onChange={(e) => {
                setTodoDesription(e.target.value);
              }}
            />
            <div className="flex justify-end items-center">
              <div className="mr-4">
                <Button text="Edit" onClick={onSubmitEdit} />
              </div>
              <div>
                <Button text="Cancel" normal={false} onClick={onCancel} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
