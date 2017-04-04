<style lang="css" scoped>
  .movie-item {
    display: block;
    font-size: 0.28rem;
    line-height: 1.2;
    margin: 0 0.2rem 0.16rem;

    color: #000;
  }
  .movie-cover {
    height: 0;
    padding-bottom: 51.25%;
    overflow: hidden;
  }
  .movie-desc {
    padding: 0.24rem 0.2rem;
    background-color: #fff;
  }
  .movie-count {
    color: #666;
  }
  .movie-score {
    font-size: 0.36rem;
    color: #f78360;
  }
  .movie-premiereAt {
    color: #f78360;
  }
  .movie-desc-aside {
    float: left;
  }
  .movie-desc-bside {
    float: right;
  }
</style>

<template>
  <router-link :to="{path: '/film/' + film.id}" tag="li">
    <a class="movie-item">
      <div class="movie-cover">
        <img :src="film.cover.origin" :alt="film.name" class="img-responsive" />
      </div>
      <div class="movie-desc clearfix">
        <div class="movie-desc-aside">
          <p class="movie-name" v-text="film.name"></p>
          <!--  -->
          <div class="movie-count" v-if="film.isNowPlaying">{{film.cinemaCount}}家影院上映 {{film.watchCount}}人购票</div>
        </div>
        <div class="movie-desc-bside movie-score" v-if="film.isNowPlaying">{{ film.grade }}</div>
        <div class="movie-desc-bside movie-premiereAt" v-if="film.isComingSoon" v-text="getPremiereTime(film.premiereAt)"></div>
      </div>
    </a>
  </router-link>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'MovieItem',
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    methods: {
      getPremiereTime (date) {
        return moment(date).format('M月DD日上映')
      }
    }
  }
</script>
