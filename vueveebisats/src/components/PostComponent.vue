<template>
  <div id="mainPage">
    <div class="buttons">
      <button @click=logOut>Log Out</button>
    </div>    
    
    <div class="posts" v-for="post in posts" :key="post.postid" @click="openPost(post.postid)">
      <div class="postHeader">
        
      <!-- Userimages are no longer in use per new homework guide
        <div class="postLogoImage" v-if="post.userimage">
          <a>
            <img :src="post.userimage" alt="Profile Pic" class="postLogoImage" />
          </a>
        </div>
       -->
        {{ post.postcreatedate }}
      </div>
      <!-- Postimages are no longer in use per new homework guide
      <div v-if="post.postimage">
        <img :src="post.postimage" alt="Post 1 image" class="postImage" />
      </div>
       -->
      {{ post.posttext }}
      <!-- likes aren't in use per new homework guide
        <div class="likeSection">
        <button v-on:click="Increaselikes(post.id)" class="likeButton">       
               <img src="../assets/like.png"  class="likeIcon" >
        </button>
        <span class="likeCount">{{ post.likecount }} likes</span>
      </div> -->
    </div>
    <div class="buttons">
      <button @click=addPost>Add Post</button>
      <button @click="delAllPosts">Delete All Posts</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],};
  },
  computed:
  
  {
    /** We no longer use the postlist in the local storage, instead we query the database
      *postList() {
      *return this.$store.state.postList;
      *},
    */
  },
  methods: {
    // Method used to access the post edit screen
    openPost(selPostID) {
      this.$router.push('/post/'+selPostID);
    },
    addPost() {
      this.$router.push('/addpost');
    },
    
    logOut() {
      this.$router.push('/login');
    },

    // Method to request all posts from the DB
    async getAllPosts() {
      try {
        const posts = await this.getData("http://localhost:8000/api/posts");
        this.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },

    // Deprecated
    //Increaselikes(postId) {
    //  this.$store.dispatch("IncreaseLikesAct", postId);
    //},

    
    // Method to delete all posts from the DB
    async delAllPosts() {
      try {
        await this.delData("http://localhost:8000/api/posts");
      } catch (error) {
        console.error(error);
      }
      location.reload()
          },

  
    // Method to make a GET request
 
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

    
    // Method to make a DELETE request
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
        } 
      } catch (error) {
        console.error(error);
      }
    },
  },

  // We want to get all posts before first load.
  beforeMount() {
    this.getAllPosts()
},
};
</script>

<style scoped>
:root {
  font-family: 'Courier Prime', monospace;
}
.buttons{  
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-around;
}
#logo {
  display: flex;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  width: 50px;
  height: 50px;
}

.posts {
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 100px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 100px;
  background-color: lightgray;
}

.postImage {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.postHeader {
  overflow: hidden;
  align-items: center;
  text-align: right;
}

.postLogoImage {
  float: left;
  margin-left: auto;
  margin-right: auto;
  width: 43px;
  height: 47px;
}


.likeSection {
  display: flex;
  justify-content: space-between;
}

.likeButton {
  background: none;
  border: none;
  cursor: pointer;
  width: 10%;
  height: 100%;
  padding: 0;
  margin-right: 0;
  
}

.likeCount {
  padding-top: 4.5%;
  margin-right: 0; 
}

.likeIcon {
  width: 4em;
  margin: 0%;
  padding: 0%;
  height: 100%;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
