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

import Library from '../components/library/Library'
import ManageItem from '../components/library/ManageItem'
import AddItem from '../components/library/AddItem'

import Types from '../components/types/Types'
import ManageType from '../components/types/ManageType'
import AddType from '../components/types/AddType'

import StartCrisis from '../components/crisis/StartCrisis'
import ManageCrisis from '../components/crisis/ManageCrisis'
import CrisisContact from '../components/crisis/Contact'
import CrisisLibrary from '../components/crisis/Library'

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
      path: '/items',
      component: Library,
      meta: {
        title: 'Library',
      }
    },
    {
      path: '/items/add',
      component: AddItem,
      meta: {
        title: 'Add Item',
      }
    },
    {
      path: '/items/:index',
      component: ManageItem,
      meta: {
        title: 'Manage Item',
      }
    },
    {
      path: '/types',
      component: Types,
      meta: {
        title: 'Types'
      }
    },
    {
      path: '/types/add',
      component: AddType,
      meta: {
        title: 'Add Type'
      }
    },
    {
      path: '/types/:index',
      component: ManageType,
      meta: {
        title: 'Manage Type',
      }
    },
    {
      path: '/crisis',
      component: StartCrisis,
      meta: {
        title: 'Start Crisis'
      }
    },
    {
      path: '/crisis/:index',
      component: ManageCrisis,
      meta: {
        title: 'Manage Crisis'
      }
    },
    {
      path: '/crisis/:index/contact',
      component: CrisisContact,
      meta: {
        title: 'Contact Somebody'
      }
    },
    {
      path: '/crisis/:index/library',
      component: CrisisLibrary,
      meta: {
        title: 'Comfort Library'
      }
    },
    {
      path: '*',
      component: ErrorPage
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
if (prevLoc) {
  router.replace(prevLoc);
} else {
  router.replace('/home');
}



module.exports = router;