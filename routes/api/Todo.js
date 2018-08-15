const router = require("express").Router();
const todosController = require("../../controllers/TodoController");

// Matches with "/api/todos"
router.route("/")
  .post(todosController.find)

router.route('/add')
  .post(todosController.create)
  

// Matches with "/api/todos/:id"
router.route("/delete/:id")
.post(todosController.delete)


// .get(todosController.findById)
router.route("/complete/:id")
.post(todosController.update)

module.exports = router;