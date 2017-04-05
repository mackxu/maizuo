<style lang="css" scoped>
  .film-list-wrap {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    background-color: #f9f9f9;
  }
  .list-nav {
    font-size: 0.32rem;
    color: #fe6e00;
    border-bottom: 1px solid currentColor;
  }
  .v-link {
    float: left;
    width: 50%;
    text-align: center;
    height: 0.92rem;
    line-height: 0.92rem;
    color: #6a6a6a;
  }
  .v-link-active {
    border-bottom: 2px solid currentColor;
    color: #fe6e00;
  }
</style>

<template>
  <section class="film-list-wrap">
    <div class="list-nav clearfix">
      <router-link to="{ path: 'film/now_playing', replace: true }" class="v-link">正在热播</router-link>
      <router-link to="{ path: 'film/coming_soon', replace: true }" class="v-link">即将上映</router-link>
    </div>
    <ul class="film-list" v-if="getFilms">
      <list-item v-for="film in getFilms" :film="film" :key="film.id"></list-item>
    </ul>
  </section>
</template>

<script>

  // film type:
  const NOW_PLAYING = 'now_playing'

  import { mapGetters } from 'vuex'
  import ListItem from './list-item.vue'

  export default {

    name: 'FilmList',

    data () {
      return {
        filmType: NOW_PLAYING
      }
    },
    created () {
      this.filmType = this.$route.params.type || NOW_PLAYING
      if (this.filmType === NOW_PLAYING) {
        this.$store.dispatch('fetchComingSoonLists', { pageN: 1, count: 10 })
      } else {
        this.$store.dispatch('fetchNowPlayingLists', { pageN: 1, count: 10 })
      }
    },
    computed: {
      ...mapGetters({
        nowPlayingFilms: 'getNowPlayingFilms',
        comingSoonFilms: 'getComingSoonFilms'
      }),
      getFilms () {
        return this.filmType === NOW_PLAYING ? this.nowPlayingFilms : this.comingSoonFilms
      }
    },
    components: {
      ListItem
    }
  }
</script>
