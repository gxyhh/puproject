import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/gohome',
    name: 'gohome',
    component: () => import('../views/GoHome.vue'),
    meta:{
      title:'个人中心',
      hideHeader:true,
        },
  },
  { //冒号传参，存储在$route.params
    //开启props接收路由参数的功能
    path: '/search/:input',
    props:true,
    name: 'search',
    component: () => import('../views/Search.vue'),
    meta:{
      title:'搜索',
      hideFooter:true,
        },
  },
  {
    path: '/sub',
    name: 'subview',
    component: () => import('../views/SubView.vue'),
    meta:{
      title:'新闻',
      hideHeader:true,

        },
  },
  {
    path: '/background',
    name: 'background',
    component: () => import('../views/BackGround.vue'),
    meta:{
      title:'后台',
        },
  },
  {
    path: '/rightdetails',
    name: 'rightdetails',
    component: () => import('../views/RightDetails.vue'),
    meta:{
      title:'新闻',
      hideHeader:true,

        },
  },
  {
    path: '/newsdetails',
    name: 'newdetails',
    component: () => import('../views/NewsDetails.vue'),
    meta:{
      title:'新闻',
      hideHeader:true,

        },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:'注册',
      hideHeader:true,
      // hideFooter:true,
        },
  },
{
  path: '/login',
  name: 'login',
  component: () => import('../views/Login.vue'),
  meta:{
    title:'登录',
    hideHeader:true,
    // hideFooter:true,
      },
},
{
  path: '*',
  name: '404',
  component: () => import('../views/NotFound.vue'),
  meta:{
    hideHeader:true,
    title:'网页不存在',
      },
},
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title:'新闻网_世界就在你眼前'},
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫：看路由大门，凡是路由发生变化都会触发这个方法
//beforeEach：路由前置守卫，路由发生变化前触发
router.beforeEach((to,from,next)=>{
  console.log('到哪去to：',to)
  console.log('从哪来from：',from)
  //修改标签栏标题
  document.title=to.meta.title
  next()  //放行：允许路由跳转，类似express的拦截器中间件

})


export default router
