const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes (points to api/contacts)
router.use("/api", apiRoutes);

module.exports = router;