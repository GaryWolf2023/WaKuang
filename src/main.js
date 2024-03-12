import { createApp } from 'vue'

// vendor
import "../src/api/config/http.js"


// develop
import './style.css'
import "./style/common.scss"
import App from './App.vue'
import { Skeleton } from "./common/directives/index.js";

import { i18n } from "./common/utils/i18n.js";
import router from "./router/router.js"

const app = createApp(App)

// use vendor
app.use(i18n)
app.use(router)

app.directive("skeleton", Skeleton)

app.mount('#app')
