<template>
	<div>
		<div class="flex flex-col min-h-screen items-center justify-start bg-gray-200">
			<div class="mt-auto bg-center mx-auto w-full max-w-lg bg-white shadow-lg rounded-lg">
				<div class="">
					<img class="justify-center"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" />
					<div class="text-center relative z-0 border-1">
						<button type="button"
							class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2">
							<img class="" src="../assets/images/icons/Approve.png">
							<div class='ml-3 text-sm font-bold pt-0.5'>
								Aprobar Empresa
							</div>
						</button>
					</div>
					<div class="text-center relative z-0 border-1">
						<button type="button"
							class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-3 py-1 text-center inline-flex items-center mr-2 mb-2">
							<img class="" src="../assets/images/icons/Decline.png">
							<div class='ml-3 text-sm font-bold pt-0.5'>
								Rechazar Empresa
							</div>
						</button>
					</div>
				</div>
				<form action="https://api.web3forms.com/submit" class="mt-10">
					<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="relative z-0">
							<input type="text" name="Nombre"
								class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Nombre de la empresa
							</label>
						</div>
						<div class="relative z-0">
							<input type="text" name="Razón"
								class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Razón Social
							</label>
						</div>
					</div>
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="relative z-0">
							<input type="text" name="Tipo"
								class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Tipo de identificación
							</label>
						</div>
						<div class="relative z-0">
							<input type="text" name="Identificación"
								class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								Identificación
							</label>
						</div>
					</div>
					<div class="grid gap-6 sm:grid-cols-2">
						<div class="relative z-0">
							<input type="text" name="NumEmpleados"
								class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
								placeholder=" " />
							<label
								class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
								# de empleados
							</label>
						</div>
						<div class="text-center relative z-0 border-1">
							<button type="button"
								class="bg-white hover:bg-gray-100 font-medium shadow-lg rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center mr-2 mb-2">
								<img class="" src="../assets/images/icons/Clip.png">
								<div class='ml-3 text-sm font-bold pt-0.5'>
									Ver archivos adjuntos
								</div>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div class="mb-auto flex justify-center items-center mt-6">
				<div class="inline-flex items-center text-gray-700 text-xs text-center">
					<img src="../assets/images/icons/Back.png">
					<p class="pr-1 pl-1 text-gray-500">Empresa 1 de 2 pendiente por aprobación</p>
					<img src="../assets/images/icons/Next.png">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AddCompanyApi from '@/Api/AddCompanys'

export default {
	data() {
		return {
			Companys: [],
		}
	},
	mounted() {
		this.loadEntries()
	},
	methods: {
		async loadEntries() {
			const { data } = await AddCompanyApi.get('/Empresas.json')
			for (let Identificación of Object.keys(data)) {
				this.Companys.push({
					Identificación,
					...data[Identificación]
				})
			}
			console.log(this.Companys)
		},
	},
}
</script>