import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/Home';
import Contacts from '../components/Contacts'
import ErrorPage from '../components/Error'

const router = new VueRouter({
  pageRouting: true,
  routes: [{
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/error',
      component: ErrorPage,
      meta: {
        title: 'Error',
      },
    },
    {
      path: '/contacts',
      component: Contacts,
      meta: {
        title: 'Contacts',
      }
    },
    {
      path: '/contacts/add',
      component: Contacts,
      meta: {
        title: 'Add Contact',
      }
    },
    {
      path: '*',
      redirect: '/error'
    },
  ],
});

router.replace('/home');

module.exports = router;