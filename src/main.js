import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

/*
 * Importacion de estukis de kubreruas
*/
import "./app.css";

/*
 * Rutas 
*/
const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/Aprobacion',
    name: 'Aprobación',
    component: () => import('@/views/AprobacionEmpresas.vue'),
    meta: {
      resource: 'aprobacion',
      action: 'read',
      breadcrumb: [
        {
          text: 'Aprobación de Empresas',
          active: true,
        },
      ]
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
  .mount('#app')
