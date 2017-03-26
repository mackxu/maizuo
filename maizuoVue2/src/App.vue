<style lang="less">
  @import "./assets/styles/icon.css";
  @import "./assets/styles/reset.css";

  @color: #fff;
  body {
    color: @color;
  }
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
