const router = require("express").Router();
const bookControllers = require("../../controllers/bookControllers");


router.route("/")
    .get(bookControllers.findAll)
    .post(bookControllers.create)
    // .catch(err => console.log(err))


router
    .route("/:id")
    .get(bookControllers.findById)
    .put(bookControllers.update)
    .delete(bookControllers.remove);

module.exports = router;