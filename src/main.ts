import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@popperjs/core';
import 'bootstrap';

createApp(App).use(router).mount('#app')
