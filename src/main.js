import { createApp } from 'vue'

// vendor
import "../src/api/config/http.js"


// develop
import './style.css'
import "./style/common.scss"
import App from './App.vue'
import { Skeleton } from "./common/directives/index.js";
import { myPlugins } from "./common/plugins/index.js"

import { i18n } from "./common/utils/i18n.js";
import router from "./router/router.js"
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

// use vendor
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(myPlugins)

app.directive("skeleton", Skeleton)

app.mount('#app')
