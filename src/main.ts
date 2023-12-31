import { createApp } from 'vue'
import App from './App.vue'
import path from './pages/path'
import { store } from './store/store'

createApp(App).use(path).use(store).mount('#app')
