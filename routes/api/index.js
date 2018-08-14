const router = require("express").Router();
const venuesRoutes = require("./Venues");
const dressesRoutes = require('./Dresses')
const decorsRoutes = require('./Decors')
const usersRoutes = require("./Users")
const todoRoutes = require("./Todo")

router.use("/venues", venuesRoutes);
router.use("/dresses", dressesRoutes);
router.use("/decors", decorsRoutes);
router.use("/users", usersRoutes);
router.use("/todos", todoRoutes)


module.exports = router;