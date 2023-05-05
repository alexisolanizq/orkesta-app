import { createApp } from 'vue'
import '@/assets/scss/index.scss'
import App from './App.vue'
import router from './router'
import OhVueIcon from '@/utils/icons'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
