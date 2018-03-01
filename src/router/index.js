import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/Signin'
import Page1 from '@/components/Pages/Page1'
import Page2 from '@/components/Pages/Page2'
import Page3 from '@/components/Pages/Page3'
import Page4 from '@/components/Pages/Page4'
import Page5 from '@/components/Pages/Page5'
import Page6 from '@/components/Pages/Page6'
import Page7 from '@/components/Pages/Page7'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    },
    {
      path: '/Pages/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Pages/Page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/Pages/Page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/Pages/Page4',
      name: 'Page4',
      component: Page4
    },
    {
      path: '/Pages/Page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/Pages/Page6',
      name: 'Page6',
      component: Page6
    },
    {
      path: '/Pages/Page7',
      name: 'Page7',
      component: Page7
    }
  ]
})

