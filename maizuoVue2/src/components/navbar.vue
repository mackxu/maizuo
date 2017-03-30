<style lang="css" scoped>
  .app-nav {
    position: fixed; left: 0; right: 0; top: 0; z-index: 500;
    overflow: hidden;
    height: 1rem; line-height: 1rem;

    background-color: #282828;
  }
  .navbar-title-icon {
    width: 0.96rem;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;
    text-align: center;
  }

  .title {
    color: #efefef; font-size: 0.28rem; padding: 0 0.2rem;
    width: 3.2rem;
  }
  .bside a { color: #999 }
  .nav-user { width: 0.96rem; text-align: center; }
</style>
<template>
  <nav class="app-nav">
    <a href="javascript: void 0;" class="fl aside" @click="showLeftNav">
      <div class="fl navbar-title-icon"><i class="iconfont icon-list"></i></div>
      <h1 class="fl text-overflow title">卖座电影</h1>
    </a>
    <div class="fr bside">
      <router-link to="/city" class="fl nav-city">
        <span class="city-content">北京</span>
        <i class="iconfont icon-dropdown"></i>
      </router-link>
      <router-link to="/login" class="fl nav-user">
        <i class="iconfont icon-user"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {

    name: 'Navbar',
    methods: {
      showLeftNav () {
        this.$store.dispatch('changeLeftNavState', true)
      }
    }
  }
</script>

