<template>
  <div id="mainPage">
    <div class="posts" v-for="post in postList" :key="post.id">
      <div class="postHeader">
        <div class="postLogoImage" v-if="post.userimage">
          <a>
            <img :src="post.userimage" alt="Profile Pic" class="postLogoImage" />
          </a>
        </div>
        {{ post.postcreatedate }}
      </div>
      <div v-if="post.postimage">
        <img :src="post.postimage" alt="Post 1 image" class="postImage" />
      </div>
      {{ post.posttext }}
      <div class="likeSection">
        <button v-on:click="Increaselikes(post.id)" class="likeButton">       
               <img src="../assets/like.png"  class="likeIcon" >
        </button>
        <span class="likeCount">{{ post.likecount }} likes</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  data() {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
  methods: {
    Increaselikes(postId) {
      this.$store.dispatch("IncreaseLikesAct", postId);
    },
  },
};
</script>

<style scoped>
:root {
  font-family: 'Courier Prime', monospace;
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

</style>
