const express = require("express");
const {
  otpVerificationController,
} = require("../controller/otpVerification.controller");

const router = express.Router();

router.post("/verify", otpVerificationController);

module.exports = router;
