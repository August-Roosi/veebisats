<template>
  <div class="Posts">
    <h2> Our  page</h2>
    <PostComponent></PostComponent> 
    <div class="footer">   
         <button v-on:click="ResetLikes()" class="resetButton">Reset likes</button>
    </div>
  </div>
 </template>
 
 <script>
import PostComponent from "@/components/PostComponent.vue";
export default {
  name: "PostsView",
  components: { PostComponent },
  data() {
    return {};
  },
    methods: {
    ResetLikes() {
      this.$store.dispatch("ResetLikesAct");
    },
  },
};
</script>
 
 <style scoped>
     .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #33333300;
      color: white;
      text-align: center;
      padding: 15px;
    }
    .footer button {
      background-color: rgb(119, 160, 199);
      border-radius: 1em;
      border: none;
      cursor: pointer;
      padding: 0.2%;
      padding-left: 0.8%;
      padding-right:0.8%;
    }

 </style>
 