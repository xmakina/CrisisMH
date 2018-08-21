import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
import * as appSettings from "application-settings";

Vue.use(VueRouter);

import Home from '../components/Home';
import Contacts from '../components/Contacts'
import ManageContact from '../components/ManageContact'
import AddContact from '../components/AddContact'
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
        title: 'Crisis Assistants',
      }
    },
    {
      path: '/contacts/add',
      component: AddContact,
      meta: {
        title: 'Add Crisis Assistant',
      }
    },
    {
      path: '/contacts/:index',
      component: ManageContact,
      meta: {
        title: 'Manage Crisis Assistant',
      }
    },
    {
      path: '*',
      redirect: '/error'
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to) {
    appSettings.setString('location', to.fullPath)
  }

  next()
})

const prevLoc = appSettings.getString('location')
if(prevLoc){
  router.replace(prevLoc);
} else {
  router.replace('/home');
}



module.exports = router;