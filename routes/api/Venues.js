const router = require("express").Router();
const VenuesController = require("../../controllers/VenuesController");

// Matches with "/api/Venues"
router.route("/")
  .get(VenuesController.find)
  .post(VenuesController.create)
  

// Matches with "/api/Venues/:id"
router.route("/:id")
.delete(VenuesController.delete)
.get(venuesController.getById)
.put(VenuesController.update)

module.exports = router;