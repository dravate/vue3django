import './assets/main.css'
import { createApp } from 'vue'
import axios from 'axios'
import stores from './stores';

import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$http = axios
app.use(router);
app.use(stores);
app.mount('#app')
