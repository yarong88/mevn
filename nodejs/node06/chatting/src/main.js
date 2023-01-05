import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { io } from 'socket.io-client'

const app = createApp(App)
const socket = io()

app.config.globalProperties.$socket = socket
// .config.globalProperties. > 전역에서 $socket으로 socket을 사용하겠다.
app.config.globalProperties.ydw = '나님 등장~!'

app.use(store).use(router).mount('#app')
