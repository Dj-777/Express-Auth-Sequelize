const { generateNumericOtp } = require("../helper/generateNumericOtp");
const User = require("../model/User");
const { sendEmailWithOtp } = require("./email.controller");
const UserDTO = require("../dto/user.dto");
const { validate } = require("class-validator");

// const { StatusCodes } = require("http-status-codes");
let userController = {};

userController.Register = async (req, res) => {
  try {
    const userDto = new UserDTO();
    Object.assign(userDto, req.body.data);

    const validationErrors = await validate(userDto);

    if (validationErrors.length > 0) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "Validation error",
        errors: validationErrors.map((error) =>
          Object.values(error.constraints)
        ),
      });
    }

    const { firstname, lastname, email, password } = userDto;
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
        role: "user",
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

module.exports = userController;
