const nodemailer = require("nodemailer");

const sendEmailWithOtp = async (toEmail, otp) => {
  // Configure your nodemailer transporter with your email service provider's settings
  const transporter = nodemailer.createTransport({
    // Your email service provider's settings go here
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "thedjgamer777@gmail.com",
      pass: "vkfz qgma bout leld",
    },
  });

  // Email content
  const mailOptions = {
    from: "your@email.com",
    to: toEmail,
    subject: "Email Verification OTP",
    text: `Your OTP for email verification is: ${otp}`,
  };

  // Send email
  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendEmailWithOtp,
};
