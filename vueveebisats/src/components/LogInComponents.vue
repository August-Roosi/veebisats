<!-- LoginComponent.vue -->
<template>
  <div>
    <form @submit.prevent="submitForm">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Password:</label>
      <input
          type="password"
          id="password"
          v-model="password"
          required
      />

      <button type="submit">Login</button>
      <p>
        Don't have an account? <router-link to="/signUp">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>

<script>

import {useRouter} from "vue-router";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submitForm() {

      try {
        await this.$store.dispatch("user/login", {
          email: this.email,
          password: this.password,
        });

        // Optionally, you can redirect the user to another page upon successful login
        const router = useRouter();
        await router.push('/home');
      } catch (error) {
        // Handle login error (e.g., display an error message)
        console.error("Login error:", error.message);
      }
    },
  },
};
</script>

<style scoped>
#loginPage {
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