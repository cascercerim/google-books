const router = require("express").Router();
const bookController = require("../../controllers/bookController.js");


router.route("/")
  .get(bookController.findAll)
  .post(bookController.create)
  .catch( err => console.log(err))
// try {
//   router = await this.form.post('/api/books')
// } catch (err) {
  
// }

router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;