import { createApp } from 'vue'
import '@/assets/scss/index.scss'
import App from './App.vue'
import router from './router'
import OhVueIcon from '@/utils/icons'

const app = createApp(App)
app.use(router)
app.component('v-icon', OhVueIcon)
app.mount('#app')
