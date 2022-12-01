import Todo from "../models/Todo";

export async function getTodosController(_req, res) {
  const todos = await Todo.find();
  res.json(todos);
}