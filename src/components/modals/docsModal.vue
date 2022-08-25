<template>
	<transition enter-active-class="ease-out duration-300" enter-class="opacity-0" enter-to-class="opacity-100"
		leave-active-class="ease-in duration-200" leave-class="opacity-100" leave-to-class="opacity-0">
		<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-show="modal">
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
			<div class="fixed z-10 inset-0 overflow-y-auto">
				<div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
					<transition enter-active-class="ease-out duration-300"
						enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
						leave-class="opacity-100 translate-y-0 sm:scale-100"
						leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
						<div v-show="modal"
							class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
							<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
								<div class="items-start">
									<div class="space-y-5 mt-3 items-center justify-center sm:mt-0 sm:ml-4 sm:text-left">
										<button type="button" @click="modal = false"
											class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
											data-modal-toggle="authentication-modal">
											<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg">
												<path fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"></path>
											</svg>
											<span class="sr-only">Close modal</span>
										</button>
										<h1 class="text-2xl font-semibold leading-6 font-medium text-center">
											Documentos cargados
										</h1>
										<div
											class="justify-between flex flex-row items-center grid grid-rows-5 grid-flow-col w-full sm:w-1/2">
											<div class=" flex flex-row items-center">
												<p>
													RUT PrevlalentWare
												</p>
												<div class="ml-auto flex-col flex ">
													<img class="ml-auto" src="/icons/Pdf.png" />
													<span class="text-xs">Rut pre...</span>
												</div>
											</div>
											<div class="flex">
												<p>
													Logo PrevlalelntWare
												</p>
												<div class="m-auto">
													<img class="ml-auto" src="/icons/Pdf.png" />
													<span class="text-xs">Logo Pre...</span>
												</div>
											</div>
											<div class="flex">
												<p>
													Acta de constitución PrevlalentWare
												</p>
												<div class="m-auto">
													<img class="ml-auto" src="/icons/Pdf.png" />
													<span class="text-xs">Acta de c...</span>
												</div>
											</div>
											<div class="flex">
												<p>
													Cámara de Comercio Prevalentware
												</p>
												<div class="m-auto">
													<img class="ml-auto" src="/icons/Pdf.png" />
													<span class="text-xs">Cámara d...</span>
												</div>
											</div>
											<div class="flex">
												<p>
													Otro Documento Prevalentware
												</p>
												<div class="m-auto">
													<img class="ml-auto" src="/icons/Pdf.png" />
													<span class="text-xs">RUT Pre...</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</transition>

</template>

<script>
export default {
	props: {
		modal: Boolean
	}
}
</script>