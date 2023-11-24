<template>
  <div class="Posts">
   <h2> Our  page</h2>
   <PostComponent></PostComponent> 
  </div>
 </template>
 
 <script>
 import PostComponent from "@/components/PostComponent.vue";
 export default {
 name: "PostsView",
 components: { PostComponent },
 data: function() {
 return {
 }},
 
 methods: {
 Increaselikes: function() {
   
   this.$store.dispatch("IncreaseLikesAct")
 },
 ResetLikes: function() {
   
   this.$store.dispatch("ResetLikesAct")
 
 }
 
 }
 }
 </script>
 
 <style scoped>
 </style>
 