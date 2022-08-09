import { createRouter, createWebHashHistory } from 'vue-router'
import LayOut from '../views/LayOut/LayOut.vue'
// import Roles from '../views/pages/rolesList.vue'
import store from '../store/index.js'
import { containsProp } from '@vueuse/shared'

//路由配置
const routes = [
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/pages/login.vue")
  },

  {
    path: '/',   //页面路径
    name: 'layout',  //页面name
    component: LayOut,  //当前路由对应组件
    // redirect: "/index",
    // 子路由、嵌套路由
    children: [
      {
        path:"/roles",
        name:"roles",
        // component: Roles,
        component:() => import("../views/pages/rolesList.vue")
      },
      {
        path:"/users",
        name:"users",
        component:() => import("../views/pages/usersList.vue")
      }
      // {
      //   path:"/goods",
      //   name:"goods",
      //   component:() => import("../views/pages/goodsList.vue")
      // },
    ]
  }
  
]
//生成hash路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next)=>{
  /**
   * to: 到哪个页面
   * from: 从哪个页面
   * next: 只有执行next()页面才会进行跳转
   */
  //判断用户是否登录
  console.log('store', store.state.uInfo)
  const uInfo = store.state.uInfo.userInfo
  if(!uInfo.username){
    //未登录，跳转到login页面
    if(to.path === "/login"){
      next()
      return
    }
    next("/login")
  }else{
    next()
  }
})
//暴露(显示)路由对象
export default router
