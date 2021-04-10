const express = require("express");
require("dotenv").config();
const pool = require("./db");

const cors = require("cors");
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json()); // req.body with json data

//create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]); //returning value
  } catch (error) {
    console.error(error);
  }
});
//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
  }
});
//update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json({ result: "Todo was updated!" });
  } catch (error) {
    console.error(error);
  }
});
//delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json({ result: "Todo was deleted!" });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}/`)
);
