import { createApp } from 'vue'

// vendor
import "../src/api/config/http.js"


// develop
import './style.css'
import App from './App.vue'
import {i18n} from "./common/utils/i18n.js";

const app = createApp(App)


// use vendor
app.use(i18n)

app.mount('#app')
