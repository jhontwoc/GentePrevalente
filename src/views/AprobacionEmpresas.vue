<template>
	<div>
		<div class="flex text-left bg-gray-200 pt-10 md:pl-10 pb-10">
			<ol class="flex text-gray-700">
				<li class="px-2"><a href="#" class="text-sky-400 hover:underline">Administración</a></li>
				<li class="text-gray-500 select-none font-semibold">/</li>
				<li class="px-2 font-semibold">Aprobación de Empresas</li>
			</ol>
		</div>
		<div class="w-full h-full flex flex-col min-h-screen items-center justify-start bg-gray-200">
			<div class="lg:hidden mb-5 flex justify-center items-center mt-6">
				<div class="inline-flex items-center text-gray-700 text-xs text-center">
					<img @click="decrease()" src="/icons/Back.png">
					<p class="pr-1 pl-1 text-gray-500">Empresa {{ currentPage }} de {{ max }} pendiente por aprobación</p>
					<img @click="increase()" src="/icons/Next.png">
				</div>
			</div>
			<div class="bg-center mx-auto w-full max-w-screen-md bg-white shadow-lg rounded-lg p-20">
				<div class="flex justify-center items-start">
					<div class="flex justify-center">
						<img class="text-center"
							src="https://media-exp1.licdn.com/dms/image/C4E0BAQFr1Mn-qykpGw/company-logo_200_200/0/1569503596387?e=2159024400&v=beta&t=9kG-dpqUDzbo1mFBr3uNZ3QLwJgi3zXRSqXwy_LTYK8" />
					</div>
					<div class="hidden md:block flex justify-end">
						<div class="flex-col space-y-3">
							<div class="text-center relative z-0 border-1">
								<button @click="approveState()" type="button"
									class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-2 py-1 text-center inline-flex items-center mb-2">
									<img class="" src="icons/Approve.png">
									<div class='ml-3 text-sm font-bold pt-0.5'>
										Aprobar Empresa
									</div>
								</button>
							</div>
							<div class="text-center relative z-0 border-1">
								<button @click="declineState()" type="button"
									class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-2 py-1 text-center inline-flex items-center mb-2">
									<img class="" src="/icons/Decline.png">
									<div class='ml-3 text-sm font-bold pt-0.5'>
										Rechazar Empresa
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<form class="mt-10">
					<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="relative z-0 pb-10">
							<input v-model="Company.Nombre" type="text" name="Nombre"
								class="font-bold peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Nombre de la empresa
							</label>
						</div>
						<div class="relative z-0 pb-10">
							<input v-model="Company.Razón" type="text" name="Razón"
								class="font-bold peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Razón Social
							</label>
						</div>
					</div>
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="relative z-0 pb-10">
							<input v-model="Company.Nit" type="text" name="Tipo"
								class="font-bold peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Tipo de identificación
							</label>
						</div>
						<div class="relative z-0 pb-10">
							<input v-model="Company.Identificación" type="text" name="Identificación"
								class="font-bold peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Identificación
							</label>
						</div>
					</div>
					<div class="grid gap-x-6 sm:grid-cols-2">
						<div class="relative z-0 pb-10">
							<input v-model="Company.NumEmpleados" type="text" name="NumEmpleados"
								class="font-bold peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								# de empleados
							</label>
						</div>
						<div class="hidden md:block text-center z-0 border-1">
							<button type="button" @click="modal = true"
								class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-3 py-1.5 text-center inline-flex w-full items-center mr-2 mb-2">
								<img class="" src="/icons/Clip.png">
								<div class='ml-3 text-sm font-bold pt-0.5'>
									Ver archivos adjuntos
								</div>
							</button>
						</div>
					</div>
				</form>
				<docs />
			</div>
			<div class="md:hidden mt-5 flex justify-end">
				<div class="flex-col space-y-3">
					<div class="text-center relative z-0 border-1">
						<button @click="approveState()" type="button"
							class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-2 py-1 text-center inline-flex items-center mb-2">
							<img class="" src="icons/Approve.png">
							<div class='ml-3 text-sm font-bold pt-0.5'>
								Aprobar Empresa
							</div>
						</button>
					</div>
					<div class="text-center relative z-0 border-1">
						<button @click="declineState()" type="button"
							class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-2 py-1 text-center inline-flex items-center mb-2">
							<img class="" src="/icons/Decline.png">
							<div class='ml-3 text-sm font-bold pt-0.5'>
								Rechazar Empresa
							</div>
						</button>
					</div>
				</div>
			</div>
			<div class="hidden md:block mb-auto flex justify-center items-center mt-6">
				<div class="inline-flex items-center text-gray-700 text-xs text-center">
					<img @click="decrease()" src="/icons/Back.png">
					<p class="pr-1 pl-1 text-gray-500">Empresa {{ currentPage }} de {{ max }} pendiente por aprobación</p>
					<img @click="increase()" src="/icons/Next.png">
				</div>
			</div>
		</div>
		<docsModal :modal="modal" />
	</div>
</template>

<script>
import AddCompanyApi from '@/Api/AddCompanys'
import docsModal from '@/components/modals/docsModal.vue'
import docs from '@/components/documents/docs.vue'
import Swal from 'sweetalert2'

export default {
	components: {
		docsModal,
		docs,
	},
	data() {
		return {
			max: 0,
			modal: false,
			currentPage: 1,
			Company: [],
		}
	},
	mounted() {
		this.loadEntries()
	},
	methods: {
		increase() {
			if (this.currentPage < 5) {
				this.Company = []
				this.currentPage += 1
				this.loadEntries()
			}
		},
		decrease() {
			if (this.currentPage > 1) {
				this.Company = []
				this.currentPage -= 1
				this.loadEntries()
			}
		},
		/* Este método nos trae todas las compañías mediante una petición GET que se 
		encuentran almacenadas en la DB
		*/
		async loadEntries() {
			const resp = await AddCompanyApi.get(`/Empresas.json`)
			console.log('resp', resp.data)
			this.max = resp.data.length
			console.log(this.max)
			const { data } = await AddCompanyApi.get(`/Empresas/Empresa${this.currentPage}.json`)
			this.Company = data
			console.log(this.Company)
		},

		// Con estos métodos se cambiará el estado de la compañía/empresa.
		async approveState() {
			this.Company.Estado = 'Aprobado'
			await AddCompanyApi.put(`/Empresas/Empresa${this.currentPage}.json`, this.Company)
			Swal.fire({
				icon: 'success',
				title: 'Empresa aprobada',
			})
		},
		async declineState() {
			this.Company.Estado = 'Rechazada'
			await AddCompanyApi.put(`/Empresas/Empresa${this.currentPage}.json`, this.Company)
			Swal.fire({
				icon: 'error',
				title: 'Empresa rechazada',
			})
		},
	},
}
</script>