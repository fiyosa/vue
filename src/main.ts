import { createApp } from 'vue'
import App from './App.vue'
import path from './pages/path'
import { store } from './store/store'
import { provider } from './provide'
import { createPinia } from 'pinia'

createApp(App).use(path).use(createPinia()).use(provider).use(store).mount('#app')
