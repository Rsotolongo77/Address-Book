//for route back to index.html
const path = require("path");

const router = require("express").Router();
const apiRoutes = require("./api");

//API Routes (points to api/contacts)
router.use("/api", apiRoutes);

//re-route if no API hit
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;