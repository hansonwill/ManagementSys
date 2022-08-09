import { createStore } from 'vuex'

import uInfo from './state/userinfo.state.js'

export default createStore({
  //全局状态初始值
  state: {    
    // count: 1,
  },
  //计算state，获取对应的值，用布尔变量判定
  getters: {   
  },
  //更新状态的方法-更新state的唯一方法，commit mutation
  mutations: {   
    // setCount(state, num){
    //   state.count = num
    // } 
  },
  //可以异步操作，可以返回promise，更改数据还是传递到mutation去更改
  actions: {    
  },
  //数据比较多，分模块
  modules: {    
   
    uInfo
  }
})
