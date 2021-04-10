import Item from "./TableItem";

export default function TodoHead() {
  return (
    <Item>
      <h2 className="font-bold text-xl">Description</h2>
      <h2 className="font-bold text-xl">Edit</h2>
      <h2 className="font-bold text-xl">Delete</h2>
    </Item>
  );
}
