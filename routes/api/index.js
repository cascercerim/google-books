
const router = require("express").Router()
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

router.post('/books', bookRoutes);

module.exports = router;