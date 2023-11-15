const express = require("express");
const router = express.Router();
const {
  getTodos,
  addTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todos");

router
  .get("/:id?", getTodos)
  .post("/", addTodo)
  .put("/:id", updateTodo)
  .delete("/:id", removeTodo);

module.exports = router;
