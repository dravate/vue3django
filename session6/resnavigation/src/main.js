import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import TheCounter from './components/TheCounter.vue';

const app = createApp(App);
app.component('TheCounter', TheCounter);
app.use(store);
app.mount('#app');

