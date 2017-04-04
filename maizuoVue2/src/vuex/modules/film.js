// vuex/modules/film
import Vue from 'vue'
import * as Type from '../mutation-types'

// http utils
const _get = ({ api, query }, commit) => {
  let localData = getLocal(api)
  if (localData) {
    return Promise.resolve(localData)
  }
  if (commit) {
    commit(Type.START_LOADING)
  }

  // 修正url
  let url = api
  if (query) {
    url += '?' + query
  }

  return Vue.$http.get(url)
    .then(res => res.data)
    .then(res => {
      commit && commit(Type.FINISH_LOADING)
      if (res.status === 0) {
        getLocal(api) || setLocal(api, res.data)
        return res.data
      }
      return Promise.reject(new Error('fetch ' + api + ' fail'))
    })
}

const getLocal = key => {
  let res = JSON.parse(localStorage.getItem(key))
  return res && res.data
}
const setLocal = (key, val) => {
  localStorage.setItem(key, JSON.stringify({
    date: +new Date(),
    data: val
  }))
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
  getComingSoonFilms: state => state.comingSoonFilms,
  getNowPlayingFilms: state => state.nowPlayingFilms,
  getBillboards: state => state.billboards,
  getFilmDetail: state => state.detail
}

// mutations
const mutations = {
  [Type.FETCH_COMING_SOON_SUCCESS] (state, data) {
    state.comingSoonFilms = data.films || []
  },
  [Type.FETCH_NOW_PLAYING_SUCCESS] (state, data) {
    state.nowPlayingFilms = data.films || []
  },
  [Type.FETCH_DETAIL_SUCCESS] (state, data) {
    state.detail = data.film || null
  },
  [Type.FETCH_BANNER_SUCCESS] (state, data) {
    state.billboards = data.billboards || []
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
      .then(res => commit(Type.FETCH_COMING_SOON_SUCCESS, res))
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
      .then(res => commit(Type.FETCH_NOW_PLAYING_SUCCESS, res))
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
      .then(res => commit(Type.FETCH_DETAIL_SUCCESS, res))
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
      .then(res => commit(Type.FETCH_BANNER_SUCCESS, res))
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
