import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// import axios from 'axios';
import { createPinia } from 'pinia';
import router from './router/router'
const pinia = createPinia();


const app = createApp(App)
// app.config.globalProperties.$http = axios
app.use(router);
app.use(pinia);
app.mount('#app')



