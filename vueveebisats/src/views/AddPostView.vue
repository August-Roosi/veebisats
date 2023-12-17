<!-- AddPostViewComponents.vue -->
<template>
    <div id="addPostPage">
      <form @submit.prevent="createPost">
        <h2>Add post</h2>
        <label for="body">Body:</label>
        <input type="text" id="body" v-model="body" required />
 
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

    async createPost() {
    //TODO: need to get the current logged in user
      try {
        const samplePostData = {
          posttext: this.body,
          userid: "2546e515-c8e6-4399-90c6-331e2f1425b2",
        };

        await this.sendData("http://localhost:8000/api/posts", samplePostData);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    },

    async sendData(url, data) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result.message);
        } else {
          console.error(`Failed to insert data for ${data.username}`);
        }
      } catch (error) {
        console.error(error);
      }
    },
      
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
  