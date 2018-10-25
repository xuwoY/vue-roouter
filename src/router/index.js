import Vue from 'vue'
import Router from 'vue-router'
import Admin from '../admin'
import page1 from '../components/page/page1'
import page2 from '../components/page/page2'
import sete1 from '../components/page/sete1'
import sete2 from '../components/page/sete2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'admin',
      component: Admin,
      children:[
      	{
      		path:'page1',
      		name:'page1',
      		alias:'page1内容',
      		component:page1
      	},
      	{
      		path:'page2',
      		name:'page2',
      		alias:'page2内容',
      		component:page2,
          // 重定向，指向子集路由的默认路由
          redirect:'page2/sete1',
          children:[
            {
              path:'sete1',
              name:'sete1',
              alias:'sete1内容',
              component:sete1
            },
            {
              path:'sete2',
              name:'sete2',
              alias:'sete2内容',
              component:sete2
            }
          ]
      	}

      ]

    }
  ]
})
