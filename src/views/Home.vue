<template>
  <div
    class="
      w-full
      h-full
      flex
      justify-center
      items-center
      bg-gray-200
      overflow-y-auto
      p-8
    "
  >
    <div class="h-full grid grid-cols-1 md:grid-cols-2 content-center gap-20">
      <router-link to="/Aprobacion">
        <card
          icon="/icons/requests.png"
          body="Solicitudes de creación de empresas"
          footer="2 solicitudes sin tratar"
        >
        </card>
      </router-link>

      <card
        icon="/icons/indicators.png"
        body="Indicadores"
        footer="Visitados por última vez: 31/01/2020"
      >
      </card>

      <card
        icon="/icons/inscriptions.png"
        body="Inscripción de empleados en empresas"
        footer="3 usuarios sin empresa registrada"
      > 
      </card>
      <card
        icon="/icons/UserManagement.png"
        body="Gestión de usuarios"
        footer="532 usuarios activos en la plataforma"
      >
      </card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>