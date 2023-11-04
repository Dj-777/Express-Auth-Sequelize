const { generateNumericOtp } = require("../helper/generateNumericOtp");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const { sendEmailWithOtp } = require("./email.controller");
let adminController = {};

adminController.Register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body.data;

    let userInfo = await User.findOne({ where: { email: email } });
    if (userInfo) {
      throw new Error("Email must be unique");
    } else {
      // Generate OTP
      const otp = generateNumericOtp();

      // Send email with OTP
      await sendEmailWithOtp(email, otp);
      let userData = await User.create({
        firstname,
        lastname,
        email,
        password,
        role: "admin",
        otp: otp,
      });
      // Handle the response
      return res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Successfully fetched!",
        data: userData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

adminController.login = async (req, res) => {
  try {
    // console.log("Inside login", req.body.data);
    const { email, password } = req.body.data;

    let userInfo = await User.findOne({ where: { email: email } });
    if (userInfo) {
      if (userInfo.dataValues.role === "admin") {
        if (userInfo.dataValues.status === "unverified") {
          // Unverified Account
          throw new Error("You are not able to login as account is unverified");
        }
        const storedPassword = userInfo.dataValues.password;
        const isPasswordValid = await bcrypt.compare(password, storedPassword);
        if (isPasswordValid) {
          // Passwords match
          return res.status(200).json({
            message: "Login successful",
          });
        } else {
          // Passwords do not match
          throw new Error("Incorrect password");
        }
      } else {
        throw new Error("You are not allowed to login from here");
      }
    } else {
      throw new Error("Email not found");
    }
  } catch (error) {
    // Logging("error", error.message);
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = adminController;
