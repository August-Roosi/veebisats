// PasswordValidator.js
export default {
    password: "",
    isValid: false,
    message: "",
  
    validate(password) {
      this.password = password;
      this.isValid =
        this.isLengthValid() &&
        this.hasUppercase() &&
        this.hasLowercase() &&
        this.hasNumeric() &&
        this.startsWithUppercase() &&
        this.hasUnderscore();
  
      return this.isValid;
    },
  
    isLengthValid() {
      return this.password.length >= 8 && this.password.length < 15;
    },
  
    hasUppercase() {
      return /[A-Z]/.test(this.password);
    },
  
    hasLowercase() {
      return /[a-z].*[a-z]/.test(this.password);
    },
  
    hasNumeric() {
      return /\d/.test(this.password);
    },
  
    startsWithUppercase() {
      return /^[A-Z]/.test(this.password);
    },
  
    hasUnderscore() {
      return /_/.test(this.password);
    },
  
    getMessage() {
      if (!this.isLengthValid()) {
        return "Password should be between 8 and 15 characters.";
      }
      if (!this.hasUppercase()) {
        return "Password should include at least one uppercase letter.";
      }
      if (!this.hasLowercase()) {
        return "Password should include at least two lowercase letters.";
      }
      if (!this.hasNumeric()) {
        return "Password should include at least one numeric value.";
      }
      if (!this.startsWithUppercase()) {
        return "Password should start with an uppercase letter.";
      }
      if (!this.hasUnderscore()) {
        return "Password should include the character '_'.";
      }
  
      return "";
    },
  };
  