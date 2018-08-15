const router = require("express").Router();
const VenuesController = require("../../controllers/VenuesController");

// Matches with "/api/Venues"
router.route("/")
  .post(VenuesController.find)

router.route('/add')
  .post(VenuesController.create)
  

// Matches with "/api/Venues/:id"
router.route("/:id")
.delete(VenuesController.delete)
.get(VenuesController.findById)
.put(VenuesController.update)

module.exports = router;