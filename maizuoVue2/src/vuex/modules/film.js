// vuex/modules/film
import Vue from 'vue'
import * as Type from '../mutation-types'

// actions
const _get = ({ api, query }, commit) => {
  if (commit) {
    commit('START_LOADING')
  }

  // 修正url
  if (query) {
    api += '?' + query
  }

  return Vue.$http.get(api)
    .then(res => {
      commit && commit('FINISH_LOADING')
      return res.data
    })
}

// state
const state = {
  comingSoonFilms: [],
  nowPlayingFilms: [],
  detail: null,
  billboards: []
}

// getters
const getters = {
  comingSoonFilms: state => state.comingSoonFilms,
  nowPlayingFilms: state => state.nowPlayingFilms,
  billboards: state => state.billboards,
  detail: state => state.detail
}

// mutations
const mutations = {
  [Type.FETCH_COMING_SOON_SUCCESS] (state, data) {
    state.comingSoonFilms = data.films
  },
  [Type.FETCH_NOW_PLAYING_SUCCESS] (state, data) {
    state.nowPlayingFilms = data.films
  },
  [Type.FETCH_DETAIL_SUCCESS] (state, data) {
    state.detail = data.film
  },
  [Type.FETCH_BANNER_SUCCESS] (state, data) {
    state.billboards = data.billboards
  }
}

// actions
const actions = {
  /**
   * 获取即将上线的影片
   * @param  {[type]} options.commit [description]
   * @param  {[type]} pageN          [description]
   * @param  {[type]} count          [description]
   * @return {[type]}                [description]
   */
  fetchComingSoonLists ({ commit }, { pageN, count }) {
    let api = '/film/coming-soon'
    let query = `page=${pageN}&count=${count}&t=${+new Date()}`

    return _get({ api, query }, commit)
      .then(res => {
        if (res.status === 0) {
          return commit('FETCH_COMING_SOON_SUCCESS', res.data)
        }
        return Promise.reject(new Error('fetch coming soon films fail'))
      })
  },
  /**
   * 获取正在上映的影片
   * @param  {[type]} options.commit [description]
   * @param  {[type]} options.pageN  [description]
   * @param  {[type]} options.count  [description]
   * @return {[type]}                [description]
   */
  fetchNowPlayingLists ({commit}, {pageN, count}) {
    let api = '/film/now-playing'
    let query = `page=${pageN}&count=${count}&t=${+new Date()}`

    return _get({ api, query }, commit)
      .then(res => {
        if (res.status === 0) {
          return commit('FETCH_NOW_PLAYING_SUCCESS', res.data)
        }
        return Promise.reject(new Error('fetch now playing films fail'))
      })
  },
  /**
   * 根据film id获取电影详情
   * @param  {[type]} options.commit [description]
   * @param  {[type]} id             电影id
   * @return {[type]}                [description]
   */
  fetchFilmDetail ({ commit }, id) {
    let api = `/film/${id}`
    let query = '_t=' + new Date().getTime()

    return _get({ api, query }, commit)
      .then(res => {
        if (res.status === 0) {
          return commit('FETCH_DETAIL_SUCCESS', res.data)
        }
        return Promise.reject(new Error('fetch detail fail'))
      })
  },
  /**
   * 获取广告位图
   * @param  {[type]} options.commit [description]
   * @return {[type]}                [description]
   */
  fetchBillboards ({commit}) {
    let api = '/billboard/home'
    let query = '_t=' + new Date().getTime()

    return _get({ api, query }, commit)
      .then(res => {
        if (res.status === 0) {
          return commit('FETCH_BANNER_SUCCESS', res.data)
        }
        return Promise.reject(new Error('fetch billboards fail'))
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
