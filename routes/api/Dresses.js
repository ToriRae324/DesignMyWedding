const router = require("express").Router();
const DressesController = require("../../controllers/DressesController");

// Matches with "/api/Dresses"
router.route("/")
  .post(DressesController.find)

router.route('/add')
  .post(DressesController.create)
  

// Matches with "/api/Dresses/:id"
router.route("/:id")
.post(DressesController.delete)


module.exports = router;