<style lang="less" scoped>

</style>

<template>
  <div class="nowPlaying">
    <ul>
      <movie-item v-for="film in films" :film="film" :key="film.id"></movie-item>
    </ul>
    <router-link to="/films/now_playing">
      <more-btn>更多热映电影</more-btn>
    </router-link>
  </div>
</template>

<script>
  import MovieItem from './MovieItem.vue'
  import MoreBtn from './MoreBtn.vue'

  export default {
    name: 'NowPlaying',
    props: {
      films: {
        type: Array,
        required: true
      }
    },
    components: {
      MovieItem,
      MoreBtn
    }
  }
</script>
