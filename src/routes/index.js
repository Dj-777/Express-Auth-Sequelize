const express = require("express");
const router = express.Router();
const { pageNotFoundController } = require("../controller/404");

router.use("/user", require("./user.routes"));
router.use("/admin", require("./admin.routes"));
router.use("/otp", require("./otpVerification.routes"));
// router.use("/auth", require("./auth.routes"));
router.use("/**", pageNotFoundController.apiRoute);

module.exports = router;
