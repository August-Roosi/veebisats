<template>
  <div class="header">
  <h1>Our Webpage Header Nav</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signUp">SignUp</router-link> 
  </nav>
  </div>
  <router-view/>
  <div class="footer">
   <h1>Our Webpage footer</h1>
   <p>
    Team T: 
    August Roosi,
    Kaisa Kumpas,
    Siim Neljandik
    Homework repo: https://github.com/August-Roosi/veebisats
    </p>
</div>
</template>

<style>
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
  }

.header {
    background-color: lightgray;
      text-align: center;
  }
</style>
