<template>
  <div class="p-2">
    <div class="flex gap-1 items-center">
      <img src="/icons/Search.png" class="w-4 h-4" />
      <input
        type="text"
        placeholder="Buscar..."
        class="
          w-full
          h-8
          py-1
          px-3
          rounded
          outline-none
          transition-all
          duration-300
          bg-transparent
          focus:ring-2 focus:ring-cyan-300
        "
      />
    </div>
  </div>
  <div class="p-2 flex items-center gap-1">
    <img src="/icons/Settings.png" class="w-4 h-4" />
    <span>Administración</span>
  </div>
  <div class="p-2 flex items-center gap-1">
    <img src="/icons/Job.png" class="w-4 h-4" />

    <select
      name="empleo"
      class="
        w-min
        h-8
        py-1
        px-3
        rounded
        bg-transparent
        outline-none
        transition-all
        duration-300
        focus:ring-2 focus:ring-cyan-300
      "
    >
      <option value="1">Empleo 1</option>
      <option value="2">Empleo 2</option>
      <option value="3">Empleo 3</option>
      <option value="4">Empleo 4</option>
      <option value="5">Empleo 5</option>
    </select>
  </div>
  <div class="p-2 flex items-center gap-1">
    <img src="/icons/Cv.png" class="w-4 h-4" />
    <span>Mi CV</span>
  </div>
  
  <div class="p-2 flex items-center gap-1 relative">
    <img src="/icons/Ellipse.png" class="w-4 h-4" />
    <span>Daniel</span>
    <img src="/icons/VectorDown.png" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>