import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//用于存储全局数据
    userState:window.sessionStorage.getItem('userState') ,    //保存当前登录用户
  },
  getters: {
  },
  mutations: {//用于声明方法修改state
    updateUserInfo(state,payload){
      //用户名存入state
      state.userState=payload
      //持久化存储，需要将用户名存入sessionStorage
      window.sessionStorage.setItem('userState',payload)
    },
    logout(state){
      state.userState=''
      sessionStorage.clear()   //将sessionStorage中的数据清空即可
    }

  },
  actions: {
  },
  modules: {
  }
})
