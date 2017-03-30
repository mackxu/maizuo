<style lang="css" scoped>
  .container {
    position: fixed;
    left: 0; right: 0; bottom: 0; top: 1rem;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1;
  }
  .list-bg {
    width: 4.2rem; height: 100%;
    background-color: #282828;
    box-shadow: 0 1px 1px #363636 inset;
    border-top: 1px solid #222;
    transform: none;
  }

  .menu-item { line-height: 1rem; }
  .menu-item a { display: block; padding: 0 0.32rem; border-bottom: 1px solid #333; color: #9a9a9a; font-size: 0.28rem; }
  .icon-arrow-right { color: #666; font-size: 0.24rem; float: right; }

  .expand-enter-active, .expand-leave-active { transition: all .4s ease; will-change: transform; }
  .expand-enter, .expand-leave-to { transform: translateX(-100%); }
  /*.expand-enter-to { transform: none }*/

</style>
<template>
  <transition name="expand">
    <aside class="app-sidebar container" v-show="isShow" @click="hideLeftNav">
      <nav class="list-bg" v-show="isShow">
        <ul class="menu-list">
          <li v-for="menu in menuList" class="menu-item">
            <router-link :to="menu.path">
              <span>{{ menu.name }}</span><i class="iconfont icon-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Sidebar',
    data () {
      return {
        menuList: [
          { name: '首页', path: '/' },
          { name: '影片', path: '/film/now_playing' },
          { name: '影院', path: '/cinema' },
          { name: '我的', path: '/member' },
          { name: '卖座卡查询', path: '/' }
        ]
      }
    },
    computed: {
      ...mapGetters({
        isShow: 'leftnavIsShow'
      })
    },
    methods: {
      hideLeftNav () {
        this.$store.dispatch('changeLeftNavState', false)
      }
    }
  }
</script>

