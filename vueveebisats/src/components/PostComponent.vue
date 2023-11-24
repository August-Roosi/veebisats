<template>
 
  <div id="mainPage">
    <div class="posts" v-for="post in postList" :key="post.id">
        <div class="postHeader">                
            <div class="postLogoImage">
                <a>   
                    <img :src="post.userimage" alt="Profile Pic" class="postLogoImage">  
                    
                </a>
            </div>     
            {{post.postcreatedate}}
        </div>
        <img :src="post.postimage"   alt="Post 1 image" class="postImage">
        {{post.posttext}}   
    </div>
  </div>



    </template>
    <script>
    export default {
    name: "PostComponent",
    data: function() {
      
    return {
    
    }},
    computed: {
        postList(){
          return this.$store.state.postList
      }
    }
    }
    </script>
    

    <style scoped>
:root {
  font-family: 'Courier Prime', monospace;
}
/* Navigation menu/navigation bar */
/* Logo link frontpage */

/* logo div */
#logo{    
  display: flex;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  width: 50px;
  height: 50px;
  }


/* posts div */
.posts{      
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

       /* image div */

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
  .postHeader i{   
    float: right;
    position: relative;
    text-align: right;
  }

    </style>