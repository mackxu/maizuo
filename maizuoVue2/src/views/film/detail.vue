<style lang="css" scoped>
  .movie-view {

  }
  dt, dd { display: inline-block; }
</style>

<template>
  <!-- 异步加载数据，数据未获取到前, film为空 -->
  <section class="movie-view" v-if="film">
    <div class="movie-cover-wrap">
      <img :src="film.cover.origin" class="img-responsive" :alt="film.name">
    </div>
    <div class="movie-intro">
      <div class="movie-title">影片介绍</div>
      <dl>
        <dt>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</dt>
        <dd v-text="film.director"></dd>
        <br />
        <dt>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</dt>
        <dd v-text="formatActors"></dd>
        <br>
        <dt>地区语言:</dt>
        <dd v-text="film.language"></dd>
        <br>
        <dt>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</dt>
        <dd v-text="film.category"></dd>
        <br>
        <dt>上映时间:</dt>
        <dd v-text="premiereAt"></dd>
      </dl>
      <!-- 剧情简介、故事梗概 -->
      <div class="movie-synopsis" v-text="film.synopsis"></div>
    </div>
  </section>
</template>

<script>
  import moment from 'moment'
  import { mapGetters } from 'vuex'

  export default {
    created () {
      this.fetchFilm()
    },
    watch: {
      $route () {
        this.film = null
        this.fetchFilm()
      }
    },
    computed: {
      ...mapGetters({
        film: 'getFilmDetail'
      }),
      // 计算属性是基于它们的依赖进行缓存
      // 只有依赖发生改变时才会重新求值
      // actors数组转换成字符串
      formatActors () {
        let actors = this.film.actors
        if (!actors || !actors.length) {
          return ''
        }
        return actors.map(function (actor) {
          return actor.name
        }).join('|')
      },
      premiereAt () {
        return moment(this.film.premiereAt).format('M月DD日上映')
      }
    },
    methods: {
      fetchFilm () {
        this.$store.dispatch('fetchFilmDetail', this.$route.params.id).catch(err => {
          console.log(err)
        })
      }
    }
  }

</script>
