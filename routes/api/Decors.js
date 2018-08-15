const router = require("express").Router();
const DecorsController = require("../../controllers/DecorsController");

// Matches with "/api/Decors"
router.route("/")
  .post(DecorsController.find)

router.route('/add')
  .post(DecorsController.create)
  

// Matches with "/api/Decors/:id"
router.route("/:id")
.delete(DecorsController.delete)
.get(DecorsController.findById)
.put(DecorsController.update)

module.exports = router;