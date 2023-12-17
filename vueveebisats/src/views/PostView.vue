<!-- AddPostViewComponents.vue -->
<template>
    <div id="addPostPage">
      <form @submit.prevent="updatePost">
        <h2>post</h2>
        <label for="body">Body:</label>
        <input type="text" id="body" v-model="body" required />
 
        <button type="submit">Update</button>
        <button @click="delPost">Delete Post</button>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
      id: this.$route.params.id ,
        username: "",
        email: "",
        password: "",
        passwordValidationMessage: "",
         body:"",
      };
    },
    methods: {

    async updatePost() {
      try {
        const samplePostData = {
          posttext: this.body,
          postid: this.id,
        };

        await this.putData("http://localhost:8000/api/posts/"+this.id, samplePostData);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }, 
    async delPost() {
        try {
        await this.delData("http://localhost:8000/api/posts/"+this.id);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
          },
          async delData(url, data) {
      try {
        const response = await fetch(url, {
          method: "DELETE",
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

    async putData(url, data) {
      try {
        const response = await fetch(url, {
          method: "PUT",
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
  