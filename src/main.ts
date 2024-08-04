import './assets/scss/global.scss'

import 'vue-awesome-paginate/dist/style.css'
import VueAwesomePaginate from 'vue-awesome-paginate'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)

router.isReady().then(() => app.mount('#app'))
