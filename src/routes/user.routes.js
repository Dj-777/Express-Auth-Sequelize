const express = require("express");
const router = express.Router();
const { pageNotFoundController } = require("../controller/404");
const userController = require("../controller/user.controller");

router.post("/register", userController.Register);
router.use("/**", pageNotFoundController.apiRoute);

module.exports = router;
