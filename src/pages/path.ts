import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from './404.vue'

const path = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', component: () => import('./Dashboard.vue') },
    { path: '/about', component: () => import('./About.vue') },
    { path: '/user', component: () => import('./User.vue') },
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
        { path: '/vuex', component: () => import('./basic/Vuex.vue') },
      ],
    },

    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
})

export default path
