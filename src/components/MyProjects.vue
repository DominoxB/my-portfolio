<template>
  <div class="text-white mt-20">
    <span class="uppercase font-semibold text-2xl">Projects</span>
    <div class="relative group">
      <img src="@/images/donutino.png" alt="donutino"
        class="rounded-md border border-gray-400 mt-2 group-hover:opacity-30 transition duration-700" />
      <a href="https://dominoxb.github.io/donutshop/" target="_blank">
        <div
          class="p-2 md:p-4 opacity-0 group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-200 bg-opacity-30 text-gray-50 rounded-b-md">
          <span class="font-bold">Donutino - online donut shop</span>
          <p class="text-xs font-medium">I designed a project of online store with donuts, prepared its layout, logic and
            functionality. I used Vue3, Pinia, Vue Router, Tailwind, Vuelidate, i18n, etc.
          </p>
        </div>
      </a>
    </div>
    <div class="relative group mt-12">
      <img src="@/images/znananiania.png" alt="zn"
        class="rounded-md border border-gray-400 mt-2 group-hover:opacity-30 transition duration-700" />
      <div
        class="p-4 opacity-0 group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-200 bg-opacity-30 text-gray-50 rounded-b-md">
        <span class="font-bold">Znana Niania (not published yet)</span>
        <p class="text-xs">Page for matching parents and nannies. Work on the frontend with using Vue3, Atomic Design,
          REST API and cooperating with
          backend team.
        </p>
      </div>
    </div>
    <div class="relative group mt-12">
      <img src="@/images/games.jpg" alt="games"
        class="rounded-md border border-gray-400 mt-2 group-hover:opacity-30 transition duration-700" />
      <div
        class="p-4 opacity-0 group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-200 bg-opacity-30 text-gray-50 rounded-b-md">
        <span class="font-bold">Design system for a gaming project</span>
        <p class="text-xs font-medium">I was part of the team working on the design system for a gaming project. We
          prepared application design and functionality based on the provided graphic project (in Figma).
        </p>
      </div>
    </div>
    <a href="https://pl.freepik.com/darmowe-wektory/gracze-uzywajacy-roznych-urzadzen-i-grajacy-na-telefonie-komorkowym-tablecie-laptopie-konsoli-ilustracja-kreskowka_12699087.htm#query=computer%20games&position=2&from_view=search&track=ais"
      class="text-[10px]">Obraz autorstwa pch.vector na Freepik</a>
  </div>
</template>

<script>
export default {
  name: 'MyProjects'
}
</script>