<!-- SignUpView.vue -->
<template>
    
    <div class="content">
      <h1>Sign Up</h1>
      <SignUpComponents />
    </div>

  </template>
  
  <script>
  import SignUpComponents from "@/components/SignUpComponent.vue";
  
  export default {
    components: {
      SignUpComponents,
    },
  };
  </script>
  
  <style scoped>
    div {
  text-align: center;
    }

    h1 {
    font-family: 'Courier Prime', monospace;
    }

    header {
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
    }

    nav {
    display: flex;
    justify-content: space-around;
    }

    .content {
    margin: 20px;
    }

    footer {
    margin-top: 20px;
    background-color: #333;
    color: white;
    padding: 1em;
    text-align: center;
    }
  </style>
  