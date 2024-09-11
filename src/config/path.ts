import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../pages/404.vue'

const routes: readonly RouteRecordRaw[] = [
  { name: 'Dashboard', path: '', component: () => import('../pages/Dashboard.vue') },
  { name: 'About', path: '/about', component: () => import('../pages/About.vue') },
  { name: 'User', path: '/user/:id', component: () => import('../pages/User.vue') },

  {
    path: '',
    component: () => import('../pages/UserIndex.vue'),
    children: [
      { path: '/user/:name', component: () => import('../pages/UserDetail.vue') },
      { path: '/user/:name/posts', component: () => import('../pages/UserPost.vue') },
      { path: '/user/:name/profile', component: () => import('../pages/UserProfile.vue') },
      { path: '/directive', component: () => import('../pages/basic/Directive.vue') },
      { path: '/conditional', component: () => import('../pages/basic/Conditional.vue') },
      { path: '/looping', component: () => import('../pages/basic/Looping.vue') },
      { path: '/event', component: () => import('../pages/basic/Event.vue') },
      { path: '/v-model', component: () => import('../pages/basic/VModel.vue') },
      { path: '/computed', component: () => import('../pages/basic/Computed.vue') },
      { path: '/watcher', component: () => import('../pages/basic/Watcher.vue') },
      { path: '/lifecycle', component: () => import('../pages/basic/Lifecycle.vue') },
      { path: '/props', component: () => import('../pages/basic/Props.vue') },
      { path: '/vuex', component: () => import('../pages/basic/Vuex.vue') },
      { path: '/provide-inject', component: () => import('../pages/basic/ProvideNInject.vue') },
    ],
  },

  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const path = createRouter({ history: createWebHistory(), routes })

export default path
