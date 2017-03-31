<style lang="css" scoped>

</style>

<template>
	<div>
    <p>home</p>
    <p>comingSoonFilms</p> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  name: 'index',

  computed: {
    ...mapGetters({
      comingSoonFilms: 'comingSoonFilms'
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
  }
}

</script>
