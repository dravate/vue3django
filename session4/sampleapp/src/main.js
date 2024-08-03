import { createApp } from 'vue';
import App from './App.vue';
import ChildComponent from './components/ChildComponent.vue';
const app = createApp(App);
app.component('ChildComponent', ChildComponent);
app.mount('#app');
