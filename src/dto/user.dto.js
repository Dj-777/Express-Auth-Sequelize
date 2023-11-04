// user.dto.js

const { IsEmail } = require("class-validator");
class UserDTO {
  validate() {
    if (!this.firstname) {
      return "First name is required";
    }

    if (!this.lastname) {
      return "Last name is required";
    }

    if (!this.email || !IsEmail(this.email)) {
      return "Valid email is required";
    }

    if (!this.password || this.password.length < 8) {
      return "Password must be at least 8 characters";
    }

    return null; // Validation successful
  }
}
module.exports = UserDTO;
