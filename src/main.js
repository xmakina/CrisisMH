import Vue from 'nativescript-vue';
import router from './router';
import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import CrisisTypeList from './components/common/CrisisTypeList'

Vue.component('CrisisTypeList', CrisisTypeList)

new Vue({

  router,


}).$start();
