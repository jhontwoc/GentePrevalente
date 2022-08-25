<template>
	<div class="w-full h-full flex justify-center items-center bg-gray-200 overflow-y-auto p-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<div
				class="cursor-pointer md:w-96 shadow-xl transition-color duration-200 shadow-xl h-56 flex flex-col items-center justify-between shadow-lg rounded-lg p-2 bg-white hover:bg-gray-100 relative">
				<div class="absolute p-3 -top-10 left-4 bg-sky-500 rounded-lg">
					<div class="w-20 h-20 px-5 py-5 object-cover rounded-lg bg-sky-500">
						<img class="justify-center" src="../assets/images/icons/requests.png" />
					</div>
				</div>
				<p class="font-semibold w-full h-full flex justify-center items-center">
					Solicitudes de creación de empresas
				</p>
				<span class="text-xs px-8 flex border-t border-gray-300 text-gray-400">
					<img class="justify-center" src="../assets/images/icons/Time.png" />
					2 solicitudes sin tratar
				</span>
			</div>
			<div
				class="cursor-pointer md:w-96 shadow-xl transition-color duration-200 shadow-xl h-56 flex flex-col items-center justify-between shadow-lg rounded-lg p-2 bg-white hover:bg-gray-100 relative">
				<div class="absolute p-3 -top-10 left-4 bg-sky-500 rounded-lg">
					<div class="w-20 h-20 px-5 py-5 object-cover rounded-lg bg-sky-500">
						<img class="justify-center" src="../assets/images/icons/indicators.png" />
					</div>
				</div>
				<p class="font-semibold w-full h-full flex justify-center items-center">
					Indicadores
				</p>
				<span class="text-xs px-8 flex border-t border-gray-300 text-gray-400">
					<img class="justify-center" src="../assets/images/icons/Time.png" />
					Visitados por última vez: 31/01/2020
				</span>
			</div>
			<div
				class="cursor-pointer md:w-96 shadow-xl transition-color duration-200 shadow-xl h-56 flex flex-col items-center justify-between shadow-lg rounded-lg p-2 bg-white hover:bg-gray-100 relative">
				<div class="absolute p-3 -top-10 left-4 bg-sky-500 rounded-lg">
					<div class="w-20 h-20 px-5 py-5 object-cover rounded-lg bg-sky-500">
						<img class="justify-center" src="../assets/images/icons/inscriptions.png" />
					</div>
				</div>
				<p class="font-semibold w-full h-full flex justify-center items-center">
					Inscripción de empleados en empresas
				</p>
				<span class="text-xs px-8 flex border-t border-gray-300 text-gray-400">
					<img class="justify-center" src="../assets/images/icons/Time.png" />
					3 usuarios sin empresa registrada
				</span>
			</div>
			<div
				class="cursor-pointer md:w-96 shadow-xl transition-color duration-200 shadow-xl h-56 flex flex-col items-center justify-between shadow-lg rounded-lg p-2 bg-white hover:bg-gray-100 relative">
				<div class="absolute p-3 -top-10 left-4 bg-sky-500 rounded-lg">
					<div class="w-20 h-20 px-5 py-5 object-cover rounded-lg bg-sky-500">
						<img class="justify-center" src="../assets/images/icons/UserManagement.png" />
					</div>
				</div>
				<p class="font-semibold w-full h-full flex justify-center items-center">
					Gestión de usuarios
				</p>
				<span class="text-xs px-8 flex border-t border-gray-300 text-gray-400">
					<img class="justify-center" src="../assets/images/icons/Time.png" />
					532 usuarios activos en la plataforma
				</span>
			</div>
		</div>
	</div>
</template>

<script>

</script>