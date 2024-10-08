import { createApp } from 'vue'
import App from './App.vue'
import store from '../store';
import router from './router'
import firebase  from '../firebaseConfig'

createApp(App).use(store).use(firebase).use(router).mount('#app')
