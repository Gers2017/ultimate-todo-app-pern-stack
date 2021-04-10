import React from "react";
import Item from "./TableItem";
import Button from "./Button";

export default function TodoItem({ description, onEdit, onDelete }) {
  return (
    <Item>
      <p className="text-lg text-gray-700">{description}</p>
      <Button text="Edit" onClick={onEdit} />
      <Button text="Delete" normal={false} onClick={onDelete} />
    </Item>
  );
}
