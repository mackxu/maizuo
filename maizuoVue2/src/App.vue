<style lang="less">
  @import "./assets/styles/icon.css";
  @import "./assets/styles/reset.css";

  body {
    font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
    background-color: #ebebeb;
    font-size: 0.3rem;
    padding-top: 1rem;
  }
</style>

<template>
  <main class="main">
    <Navbar></Navbar>
    <div class="app-view">
      <router-view></router-view>
    </div>
    <Sidebar></Sidebar>
    <div class="nprogress">
    </div>
  </main>
</template>

<script>
  import Navbar from './components/Navbar'
  import Sidebar from './components/Sidebar'
  export default {
    name: 'app',
    components: {
      Navbar,
      Sidebar
    },
    created () {
      // 动态计算html的字体大小
      let html = document.documentElement
      html.style.fontSize = html.clientWidth / 6.4 + 'px'
    }
  }
</script>
