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
  [Type.CHANGE_LEFTNAV_STATE] (state) {
    state.leftnavIsShow = !state.leftnavIsShow
  },
  [Type.START_LOADING] (state) {
    state.isLoading = true
  },
  [Type.FINISH_LOADING] (state) {
    state.isLoading = false
  }
}

const actions = {
  changeLeftNavState ({commit}, isShow) {
    commit(Type.CHANGE_LEFTNAV_STATE, isShow)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
