<style lang="css" scoped>
  .coming-soon {
    padding-top: 0.6rem;
    border-top: 1px solid #a7a7a7;

    position: relative;
  }
  .title {
    font-size: 0.24rem;
    color: #eee;
    background-color: #a7a7a7;
    border-radius: 10%;
    padding: 0.08rem 0.12rem;

    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
  }
</style>

<template>
  <div class="coming-soon">
    <header class="title">即将上线</header>
    <ul class="movie">
      <movie-item v-for="film in films" :film="film" :key="film.id"></movie-item>
    </ul>
    <!-- 此处需要参数 与正在热映列表区分 -->
    <router-link to="/films/coming_soon">
      <more-btn>更多即将上映的电影</more-btn>
    </router-link>
  </div>
</template>

<script>
  import MovieItem from './MovieItem.vue'
  import MoreBtn from './MoreBtn.vue'

  export default {
    name: 'ComingSoon',
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
