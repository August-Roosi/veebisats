<template>
  <div class="header">
    <h1>Our Webpage Header Nav</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signUp">SignUp</router-link>
      <button @click="insertDefaultData">Insert Default Data</button>
      <button @click="getAndDisplayUsers">Get Users</button>
      <button @click="getAllPosts">Display All Posts</button>
      <button @click="createPostForRandomUser">Create Post for Random User</button>
    </nav>
  </div>
  <router-view />
  <div class="footer">
    <h1>Our Webpage footer</h1>
    <p>
      Team T: August Roosi, Kaisa Kumpas, Siim Neljandik Homework repo:
      https://github.com/August-Roosi/veebisats
    </p>
    <div v-if="users.length > 0">
      <h2>Users:</h2>
      <ul>
        <li v-for="user in users" :key="user.userid">
          {{ user.username }} - {{ user.userimage }}
        </li>
      </ul>
    </div>
    <div v-if="posts.length > 0">
      <h2>All Posts:</h2>
      <ul>
        <li v-for="post in posts" :key="post.postid">
          {{ post.posttext }} - {{ post.postcreatedate }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      posts: [],
    };
  },
  methods: {
    async insertDefaultData() {
      try {
        const sampleUserData1 = {
          username: "User1",
          userimage: "https://example.com/user1-image.jpg",
        };

        const sampleUserData2 = {
          username: "User2",
          userimage: "https://example.com/user2-image.jpg",
        };

        await this.sendData("http://localhost:8000/api/users", sampleUserData1);
        await this.sendData("http://localhost:8000/api/users", sampleUserData2);
      } catch (error) {
        console.error(error);
      }
    },

    async getAndDisplayUsers() {
      try {
        const users = await this.getData("http://localhost:8000/api/users");
        this.users = users;
      } catch (error) {
        console.error(error);
      }
    },

    async getAllPosts() {
      try {
        const posts = await this.getData("http://localhost:8000/api/posts");
        this.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },

    async createPostForRandomUser() {
      try {
        if (this.users.length === 0) {
          console.warn("No users available. Fetch users first.");
          return;
        }

        const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
        const samplePostData = {
          posttext: "Lorem ipsum dolor sit amet",
          likecount: 0,
          tags: ["tag1", "tag2"],
          userid: randomUser.userid,
        };

        await this.sendData("http://localhost:8000/api/posts", samplePostData);
      } catch (error) {
        console.error(error);
      }
    },

    async getData(url) {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {},
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result.message);
          return result; 
        } else {
          console.error(`Failed to fetch data`);
        }
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  background-color: lightgray;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
}

.header {
  background-color: lightgray;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

h2 {
  margin-top: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

</style>
