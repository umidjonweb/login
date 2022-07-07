import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'

import router from './router'
import store from './store'

createApp(App).use(store).use(ElementPlus).use(VueTheMask).use(router).mount('#app')
