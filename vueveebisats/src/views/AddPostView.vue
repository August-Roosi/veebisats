<!-- AddPostViewComponents.vue -->
<template>
    <div id="addPostPage">
      <form @submit.prevent="submitForm">
        <h2>Add post</h2>
        <label for="Body">Body:</label>
        <input type="text" id="Body" v-model="body" required />
 
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  
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
      
    },
  };
  </script>
  
  <style scoped>
  #addPostPage {
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
  