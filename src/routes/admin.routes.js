const express = require("express");
const router = express.Router();
const { pageNotFoundController } = require("../controller/404");
const adminController = require("../controller/admin.controller");

router.post("/register", adminController.Register);
router.post("/login", adminController.login);
router.use("/**", pageNotFoundController.apiRoute);

module.exports = router;
