import { createApp } from 'vue'

// vendor
import "../src/api/config/http.js"


// develop
import './style.css'
import App from './App.vue'
import {post} from "./api/config/http.js";

post("", "", {
    needToken: true
})

createApp(App).mount('#app')
