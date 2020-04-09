// ./src/router.js

import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/Home';
import EditComponent from '@/components/action/Edit';
import CreateComponent from '@/components/action/Create';
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
  ]
});
