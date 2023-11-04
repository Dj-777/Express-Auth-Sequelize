const { verifyNumericOtp } = require("../helper/otpVerify.helper");
const User = require("../model/User");

exports.otpVerificationController = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Retrieve user by email
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      throw new Error("User not found");
    }
    const storedOtp = user.dataValues.otp;

    // Validate OTP using the helper function
    const isOtpValid = verifyNumericOtp(otp, storedOtp);

    // Validate OTP

    if (isOtpValid) {
      // Update user status to "verified" in the database
      await User.update({ status: "verified" }, { where: { email: email } });

      return res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Email verification successful",
      });
    } else {
      throw new Error("Invalid OTP");
    }
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
