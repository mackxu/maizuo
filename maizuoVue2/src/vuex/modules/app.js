// vuex/modules/app
import * as Type from '../mutation-types'

const state = {
  leftnavIsShow: false,
  isLoading: false
}

const getters = {
  leftnavIsShow: state => state.leftnavIsShow,
  isLoading: state => state.isLoading
}

const mutations = {
  [Type.CHANGE_LEFTNAV_STATE] (state, isShow) {
    state.leftnavIsShow = isShow
  },
  [Type.START_LOADING] (state) {
    state.isLoading = true
  },
  [Type.FINISH_LOADING] (state) {
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  mutations
}
