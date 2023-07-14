<template>
  <div class="text-white mt-8">
    <span class="font-roboto uppercase font-semibold text-xl">Projects</span>
    <div class="relative group">
      <img src="@/images/donutino.png" alt="donutino" class="rounded-md border border-gray-400 mt-2 hover:opacity-30 transition duration-700" />
      <a href="https://dominoxb.github.io/donutshop/" target="_blank">
      <div
        class="py-4 opacity-0 group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-200 bg-opacity-30 font-roboto text-black rounded-b-md">
        <span class="font-bold">Donutino - online donut shop</span>
        <p class="text-xs font-medium">I designed a project of online store with donuts, prepared its layout, logic and functionality.
          I used Vue3, Pinia, Vue Router, Tailwind, Vuelidate, i18n, etc.
        </p>
      </div>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects'
}
</script>