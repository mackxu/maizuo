<style lang="css" scoped>
  .mySwiper {
    height: 3.6rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    overflow: hidden;

    margin-bottom: 0.32rem;
  }
  .swiper-cover-wrapper {
    display: block;
    font-size: 0;
  }
  .swiper img {
    width: 100%;
  }
  .movie ul {
    padding-top: 18px;
  }

</style>

<template>
  <section class="container">
    <swiper class="mySwiper" :options="swiperOptions">
      <swiper-slide class="swiper" v-for="bb in billboards" :key="bb.id">
        <a :href="bb.url" class="swiper-cover-wrapper">
          <img :src="bb.imageUrl" alt="" />
        </a>
      </swiper-slide>
    </swiper>
    <now-playing :films="nowPlayingFilms" v-if="nowPlayingFilms && nowPlayingFilms.length"></now-playing>
    <coming-soon :films="comingSoonFilms" v-if="comingSoonFilms && comingSoonFilms.length"></coming-soon>
  </section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { mapGetters } from 'vuex'
  import ComingSoon from './ComingSoon.vue'
  import NowPlaying from './NowPlaying.vue'

  export default {

    name: 'Index',
    data () {
      return {
        swiperOptions: {
          autoplay: 3000,
          autoHeight: true
        }
      }
    },
    computed: {
      ...mapGetters({
        comingSoonFilms: 'getComingSoonFilms',
        nowPlayingFilms: 'getNowPlayingFilms',
        billboards: 'getBillboards'
      })
    },
    created () {
      // 获取即将上线的影片
      this.$store.dispatch('fetchComingSoonLists', { pageN: 1, count: 5 }).catch(err => {
        console.log(err)
      })
      this.$store.dispatch('fetchNowPlayingLists', { pageN: 1, count: 5 }).catch(err => {
        console.log(err)
      })
      this.$store.dispatch('fetchBillboards').catch(err => {
        console.log(err)
      })
    },
    components: {
      ComingSoon, NowPlaying, swiper, swiperSlide
    }
  }
</script>
