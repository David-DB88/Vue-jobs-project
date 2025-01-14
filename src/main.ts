import './assets/main.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'
import Toast from 'vue-toastification'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(Toast)
app.use(router)
app.mount('#app')