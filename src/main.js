import { createApp } from "vue"

// vendor
import "../src/api/config/http.js"


// develop
import "./style.css"
import "/public/font/font.css"
import "./style/common.scss"
import "./style/theme/theme_dark.scss"
import App from "./App.vue"
import { myPlugins } from "./common/plugins/index.js"

import { i18n } from "./common/utils/i18n.js";
import router from "./router/router.js"
import { createPinia } from "pinia"

const pinia = createPinia()
const app = createApp(App)

// use vendor
app.use(i18n)
app.use(router)
app.use(pinia)
app.use(myPlugins)

app.mount("#app")
