<template>
  <div class="mt-20 text-white">
    <span class="uppercase font-semibold text-2xl text-white">{{ $t('projects') }}</span>
    <div class="relative group">
      <img src="@/images/donutino.png" alt="donutino"
        class="rounded-md border border-gray-400 mt-2 opacity-50 md:opacity-100 md:group-hover:opacity-30 transition duration-700" />
      <a href="https://dominoxb.github.io/donutshop/" target="_blank">
        <div
          class="p-2 md:p-8 md:opacity-0 opacity-90 md:group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 md:bg-gray-200 md:bg-opacity-30 text-white rounded-b-md">
          <span class="font-bold">{{ $t('shopName') }}</span>
          <p class="text-xs font-medium mt-1">{{ $t('shopDesc') }}
          </p>
        </div>
      </a>
    </div>
    <div class="relative group mt-12">
      <img src="@/images/znananiania.png" alt="zn"
        class="rounded-md border border-gray-400 mt-2 opacity-50 md:opacity-100 md:group-hover:opacity-30 transition duration-700" />
      <div
        class="p-2 md:p-8 md:opacity-0 opacity-90 md:group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 md:bg-gray-200 md:bg-opacity-30 rounded-b-md">
        <span class="font-bold">{{ $t('nanny') }}</span>
        <p class="text-xs mt-1">{{ $t('nannyDesc') }}
        </p>
      </div>
    </div>
    <div class="relative group mt-12">
      <img src="@/images/games.jpg" alt="games"
        class="rounded-md border border-gray-400 mt-2 opacity-50 md:opacity-100 md:group-hover:opacity-30 transition duration-700" />
      <div
        class="p-2 md:p-8 md:opacity-0 opacity-90 md:group-hover:opacity-100 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 md:bg-gray-200 md:bg-opacity-30 rounded-b-md">
        <span class="font-bold">{{ $t('gameProject') }}</span>
        <p class="text-xs font-medium mt-1">{{ $t('gameProjectDesc') }}
        </p>
      </div>
    </div>
    <a href="https://pl.freepik.com/darmowe-wektory/gracze-uzywajacy-roznych-urzadzen-i-grajacy-na-telefonie-komorkowym-tablecie-laptopie-konsoli-ilustracja-kreskowka_12699087.htm#query=computer%20games&position=2&from_view=search&track=ais"
      class="text-[10px]">{{ $t('freePik') }}</a>
  </div>
</template>

<script>
export default {
  name: 'MyProjects'
}
</script>