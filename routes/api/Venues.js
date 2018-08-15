const router = require("express").Router();
const VenuesController = require("../../controllers/VenuesController");

// Matches with "/api/Venues"
router.route("/")
  .post(VenuesController.find)

router.route('/add')
  .post(VenuesController.create)
  

// Matches with "/api/Venues/:id"
router.route("/:id")
.post(VenuesController.delete)

module.exports = router;