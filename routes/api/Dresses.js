const router = require("express").Router();
const DressesController = require("../../controllers/DressesController");

// Matches with "/api/Dresses"
router.route("/")
  .get(DressesController.find)
  .post(DressesController.create)
  

// Matches with "/api/Dresses/:id"
router.route("/:id")
.delete(DressesController.delete)
.get(DressesController.getById)
.put(DressesController.update)

module.exports = router;