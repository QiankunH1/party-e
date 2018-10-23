import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)
const components ={
  layout: ()=>import("@/views/layout"),
  home:()=>import('@/views/home/index'),
  zhidao:()=>import('@/views/zhidao/index'),
  dangjian:()=>import('@/views/dangjian/index'),
  login:()=>import('@/views/login/index'),
  newlist:()=>import('@/views/newslist/index'),
  newsdetail:()=>import('@/views/newsdetail/index'),

  // news:()=>import('@/views/list/news/index'),
  // onepass:()=>import('@/views/list/onepass/index'),
  // identity:()=>import('@/views/list/identity/index'),
  life:()=>import('@/views/list/life/index'),
  exchange:()=>import('@/views/list/exchange/index'),
  today:()=>import('@/views/list/today/index'),

  // study:()=>import('@/views/feature/study/index'),
  // active:()=>import('@/views/feature/active/index'),
  // system:()=>import('@/views/feature/system/index'),
  photo:()=>import('@/views/feature/photo/index'),


  changepassword:()=>import('@/views/changepassword/index'),
  jifen:()=>import('@/views/jifen/index'),
  organization:()=>import('@/views/organization/index'),
  minzhupingyi:()=>import('@/views/minzhupingyi/index'),
  pingyi:()=>import('@/views/minzhupingyi/pingyi'),
  summary:()=>import('@/views/minzhupingyi/summary'),
 userinfo:()=>import('@/views/userinfo/index'),
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component:components.layout,
      redirect:'/home',
      children:[
        {
          path:'home',
          name:'home',
          meta:{
            title:'首页'
          },
          component: components.home
        },
        {
          path:'zhidao',
          name:'zhidao',
          meta:{
            title:'通知早知道'
          },
          component: components.zhidao
        },
        {
          path:'dangjian',
          name:'dangjian',
          meta:{
            title:'我的党建'
          },
          component: components.dangjian
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        title:'登录'
      },
      component:components.login,
    },


    {
      path: '/news',
      name: 'news',
      meta:{
        title:'信工新闻眼'
      },
      component:components.newlist,
    },
    {
      path: '/life',
      name: 'life',
      meta:{
        title:'掌上组织生活'
      },
      component:components.life
    },
    {
      path: '/onepass',
      name: 'onepass',
      meta:{
        title:'党建一点通'
      },
      component:components.newlist,
    },
    {
      path: '/identity',
      name: 'identity',
      meta:{
        title:'党员亮身份'
      },
      component:components.newlist,
    },
    {
      path: '/exchange',
      name: 'exchange',
      meta:{
        title:'党员云互动'
      },
      component:components.exchange,
    },
    {
      path: '/today',
      name: 'today',
      meta:{
        title:'党史上的今天'
      },
      component:components.today,
    },



    {
      path: '/study',
      name: 'study',
      meta:{
        title:'随时随地学'
      },
      component:components.newlist,
    },
    {
      path: '/photo',
      name: 'photo',
      meta:{
        title:'随时随地学拍'
      },
      component:components.photo,
    },
    {
      path: '/active',
      name: 'active',
      meta:{
        title:'特色活动'
      },
      component:components.newlist,
    },
    {
      path: '/system',
      name: 'system',
      meta:{
        title:'特色建设'
      },
      component:components.newlist,
    },
    {
      path: '/politics',
      name: 'politics',
      meta:{
        title:'政治学习'
      },
      component:components.newlist,
    },
   
    {
      path: '/news/detail/:id',
      name: 'newsdetail',
      // meta:{
      //   title:'信工新闻眼'
      // },
      component:components.newsdetail,
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      meta:{
        title:'修改密码'
      },
      component:components.changepassword,
    },
    {
      path: '/jifen',
      name: 'jifen',
      meta:{
        title:'个人积分量化'
      },
      component:components.jifen,
    },
    {
      path: '/organization',
      name: 'organization',
      meta:{
        title:'流动党员找组织'
      },
      component:components.organization,
    },
    {
      path: '/minzhupingyi',
      name: 'minzhupingyi',
      meta:{
        title:'掌上组织生活'
      },
      component:components.minzhupingyi,
    },
    {
      path: '/summary',
      name: 'summary',
      meta:{
        title:'个人总结'
      },
      component:components.summary,
    },
    {
      path: '/pingyi',
      name: 'pingyi',
      meta:{
        title:'民族评议'
      },
      component:components.pingyi,
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      meta:{
        title:'个人信息'
      },
      component:components.userinfo,
    },
   
  ]
})
