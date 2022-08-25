<template>
  <div
    class="
      cursor-pointer
      w-full
      h-56
      shadow-xl
      transition-color
      duration-200
      flex flex-col
      items-center
      justify-between
      shadow-lg
      rounded-lg
      p-2
      bg-white
      hover:bg-gray-100
      relative
    "
  >
    <div
      class="
        absolute
        -top-10
        left-4
        bg-sky-500
        rounded-lg
        flex
        justify-center
        p-4
      "
    >
      <img class="w-16 h-16" :src="icon" />
    </div>
    <p class="text-2xl w-full h-full flex justify-center items-center pt-8 px-2">
      {{ body }}
    </p>
    <span
      class="
        h-14
        w-full
        flex
        gap-4
        items-center
        text-xs
        px-8
        border-t border-gray-300
        text-gray-400
      "
    >
      <img class="w-4 h-4" src="/icons/Time.png" />
      <span>{{ footer }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    body: {
      type: String,
    },
    footer: {
      type: String,
    },
  },
};
</script>

<style>
</style>