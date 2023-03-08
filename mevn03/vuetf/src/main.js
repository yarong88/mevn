import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as tfvis from '@tensorflow/tfjs-vis'

const app = createApp(App)
app.config.globalProperties.$tfvis = tfvis
createApp(App).use(store).use(router).mount('#app')
