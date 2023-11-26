<!-- SignUpComponents.vue -->
<template>
    <div id="signUpPage">
      <form @submit.prevent="submitForm">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
  
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          @input="validatePassword"
        />
        <p v-if="passwordValidationMessage" class="validation-message">
          {{ passwordValidationMessage }}
        </p>
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import PasswordValidator from "@/utils/PasswordValidator.js";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
        passwordValidationMessage: "",
      };
    },
    methods: {
      validatePassword() {
        const isValid = PasswordValidator.validate(this.password);
        this.passwordValidationMessage = isValid
          ? ""
          : PasswordValidator.getMessage();
      },
      async submitForm() {
        // Validate password before submitting
        if (!PasswordValidator.validate(this.password)) {
        // If the password is not valid, do not proceed with the registration
            return;
        }

        // Assuming you have a Vuex store module named 'user'
        try {
            // Dispatch an action to register the user
            await this.$store.dispatch("user/register", {
                username: this.username,
                email: this.email,
                password: this.password,
            });

            // Optionally, you can redirect the user to another page upon successful registration
            this.$router.push("/login");
        } catch (error) {
            // Handle registration error (e.g., display an error message)
            console.error("Registration error:", error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #signUpPage {
  font-family: 'Courier Prime', monospace;
  margin: 25px;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
}

label {
  margin-top: 10px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
}

.validation-message {
  color: red;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
  </style>
  