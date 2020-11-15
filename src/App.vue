<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
    <!-- <router-link  to="/login"></router-link> -->
    <!-- <router-link  to="/signup"></router-link> -->
    <!-- <Login/> -->
    <!-- <SignUp/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/Login.vue';
// import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld, // 引用 HelloWorld 為元件，使他可以被當成 tag 在 template 裡被使用
    // Login,
    // SignUp
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
