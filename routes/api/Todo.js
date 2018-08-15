const router = require("express").Router();
const todosController = require("../../controllers/TodoController");

// Matches with "/api/todos"
router.route("/")
  .post(todosController.find)

router.route('/add')
  .post(todosController.create)
  

// Matches with "/api/todos/:id"
router.route("/delete/:id")
.delete(todosController.delete)

router.route('/:id')
.get(todosController.findById)
.put(todosController.update)

module.exports = router;