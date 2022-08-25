import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
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

export default router
