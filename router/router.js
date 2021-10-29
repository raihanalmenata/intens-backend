const router = require("express").Router();
const controller = require("../controller/login");
const auth = require("../middleware/auth");

router.post("/register", controller.registerUser);
router.post("/login", controller.login);

module.exports = router;
