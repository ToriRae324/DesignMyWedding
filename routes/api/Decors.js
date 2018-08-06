const router = require("express").Router();
const DecorsController = require("../../controllers/DecorsController");

// Matches with "/api/Decors"
router.route("/")
  .get(DecorsController.find)
  .post(DecorsController.create)
  

// Matches with "/api/Decors/:id"
router.route("/:id")
.delete(DecorsController.delete)
.get(DecorsController.getById)
.put(DecorsController.update)

module.exports = router;