import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
import * as appSettings from "application-settings";

Vue.use(VueRouter);

import Home from '../components/Home';

import Contacts from '../components/contacts/Contacts'
import ManageContact from '../components/contacts/ManageContact'
import AddContact from '../components/contacts/AddContact'

import Notes from '../components/notes/Notes'
import ManageNote from '../components/notes/ManageNote'
import AddNote from '../components/notes/AddNote'

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
      path: '/notes',
      component: Notes,
      meta: {
        title: 'Notes',
      }
    },
    {
      path: '/notes/add',
      component: AddNote,
      meta: {
        title: 'Add Note',
      }
    },
    {
      path: '/notes/:index',
      component: ManageNote,
      meta: {
        title: 'Manage Note',
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