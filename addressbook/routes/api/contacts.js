const router = require("express").Router();

//point route to methods for models
const contactController = require("../../controllers/contactsController");

//matches "/api/contacts"
router
    .route("/")
    .get(contactsController.findAll)
    .post(contactController.create);


//matches "api/contacts/:id"
router
    .route("/:id")
    .get(contactController.findById)
    .put(contactController.update)
    .delete(contactController.remove);

module.exports = router;

