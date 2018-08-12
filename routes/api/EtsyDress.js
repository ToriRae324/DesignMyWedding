const router = require("express").Router();
const DressesController = require("../../controllers/EtsyDressController");

// Matches with "/api/Dresses"
router.route("/")
  .get(DressesController.find)

module.exports = router;