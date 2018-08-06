const router = require("express").Router();
const UsersController = require("../../controllers/UserController");

// Matches with "/api/Decors"
router.route("/")
  .post(DecorsController.create)
  

// Matches with "/api/Decors/:id"
router.route("/:id")
.get(DecorsController.getById)

module.exports = router;