// helpers/otpHelper.js
const verifyNumericOtp = (enteredOtp, storedOtp) => {
  // Compare the entered OTP with the stored OTP
  return enteredOtp === storedOtp;
};

module.exports = {
  verifyNumericOtp,
};
