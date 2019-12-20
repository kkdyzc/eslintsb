// 路由配置文件只放路由信息
// ctrl + p 快速搜索文件

const routes = [{
    path: '/',
    component:()=>import('@/views/Home.vue'),
    children:[
      {
        name:'home',
        path:'',
        component:()=>import('@/views/main/Main')
      },{
        path:'social',
        name:'social',
        component:()=>import('@/views/main/Social')
      }
    ]
  },
  //配置嵌套路由
  {
    path: '/login',
    //当文件名为index时可以省略不写
    component: () => import('@/views/user/'),
    //配置子路由
    children: [{
      //配置登陆
      path: '',
      name: 'login',
      component: () => import('@/views/user/Login')
    },
    {
      path:'/reg',
      name:'reg',
      component:() => import('@/views/user/reg'),
    } ]
  },
  
  /*  {
     //配置login页面
     path:'/login',
     //给login路由取名 命名路由
     name:'login',
     //导入login页面需要展示内容           可以省略.vue
     component:() => import('@/views/user/Login')
   },
   {
     path:'/reg',
     name:'reg',
     component:() => import('@/views/user/reg'),
   } */

  /*   {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    } */
]

// 在其他文件使用需要把默认router导出
export default routes