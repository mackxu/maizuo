import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions'
import * as getters from './getters'
import mApp from './modules/app'
import mFilm from './modules/film'

Vue.use(Vuex)

Vue.$http = axios.create({
  baseURL: 'http://localhost:8080/v4/api',
  timeout: 1000
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    mApp,
    mFilm
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
