const router = require("express").Router();
const DecorsController = require("../../controllers/DecorsController");

// Matches with "/api/Decors"
router.route("/")
  .post(DecorsController.find)

router.route('/add')
  .post(DecorsController.create)
  

// Matches with "/api/Decors/:id"
router.route("/:id")
.post(DecorsController.delete)


module.exports = router;