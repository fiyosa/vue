import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import NotFoundView from './404.vue'

const routes: readonly RouteRecordRaw[] = [
  { name: 'Dashboard', path: '', component: () => import('./Dashboard.vue') },
  { name: 'About', path: '/about', component: () => import('./About.vue') },
  { name: 'User', path: '/user/:id', component: () => import('./User.vue') },

  {
    path: '',
    component: () => import('./UserIndex.vue'),
    children: [
      { path: '/user/:name', component: () => import('./UserDetail.vue') },
      { path: '/user/:name/posts', component: () => import('./UserPost.vue') },
      { path: '/user/:name/profile', component: () => import('./UserProfile.vue') },
      { path: '/directive', component: () => import('./basic/Directive.vue') },
      { path: '/conditional', component: () => import('./basic/Conditional.vue') },
      { path: '/looping', component: () => import('./basic/Looping.vue') },
      { path: '/event', component: () => import('./basic/Event.vue') },
      { path: '/v-model', component: () => import('./basic/VModel.vue') },
      { path: '/computed', component: () => import('./basic/Computed.vue') },
      { path: '/watcher', component: () => import('./basic/Watcher.vue') },
      { path: '/lifecycle', component: () => import('./basic/Lifecycle.vue') },
      { path: '/props', component: () => import('./basic/Props.vue') },
      { path: '/vuex', component: () => import('./basic/Vuex.vue') },
      { path: '/provide-inject', component: () => import('./basic/ProvideNInject.vue') },
    ],
  },

  { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const path = createRouter({ history: createWebHistory(), routes })

export default path
