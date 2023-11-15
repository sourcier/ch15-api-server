const Todo = require("../models/todo");

exports.getTodos = async function (req, res) {
  let query = {};

  if (req.params.id) {
    query._id = req.params.id;
  }

  try {
    const todos = await Todo.find(query);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addTodo = async function (req, res) {
  const todoData = req.body;

  try {
    const newTodo = new Todo(todoData);
    const todo = newTodo.save();
    return res.status(201).json(todo);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateTodo = async function (req, res) {
  try {
    await Todo.updateOne({ _id: req.params.id }, req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeTodo = async function (req, res) {
  try {
    await Todo.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
};
