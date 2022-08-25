import { createApp } from 'vue'
import App from './App.vue'

/**
 * Importacion de Vue-Router
 */
import router from "./router"

/**
 * Importacion de TailwindCSS
 */
import "./app.css";

const app = createApp(App)
app.use(router)
  .mount('#app')
