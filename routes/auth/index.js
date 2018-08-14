const router = require("express").Router();
const etsyDressRoutes = require("./Etsy")
const foursquareRoutes = require("./FourSquare")
const authRoutes = require("./auth")

router.use("/etsy", etsyDressRoutes)
router.use("/foursquare",foursquareRoutes)
router.use("/", authRoutes)


module.exports = router;