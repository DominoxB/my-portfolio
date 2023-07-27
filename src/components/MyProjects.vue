<template>
  <div class="mt-12 mb-10 text-white">
    <span class="uppercase font-semibold text-2xl text-white">{{ $t('projects') }}</span>
    <!-- DONUTINO -->
    <div class="relative group pb-2/3">
      <img src="@/images/donutino.png" alt="donutino"
        class="absolute h-full w-full object-cover rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <a href="https://dominoxb.github.io/donutshop/" target="_blank">
        <div
          class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 text-white lg:opacity-0 lg:group-hover:opacity-100 lg:bg-gray-200 lg:bg-opacity-30 xl:p-8">
          <span class="text-sm font-bold lg:text-base">{{ $t('shopName') }}</span>
          <p class="text-xs font-medium mt-1 lg:text-sm">{{ $t('shopDesc') }}
          </p>
        </div>
      </a>
    </div>
    <!-- ZNANA NIANIA -->
    <div class="relative group mt-12 pb-2/3">
      <img src="@/images/znananiania.png" alt="zn"
        class="absolute h-full w-full object-cover rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <div
        class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 text-white lg:opacity-0 lg:group-hover:opacity-100 lg:bg-gray-200 lg:bg-opacity-30 xl:p-8">
        <span class="text-sm font-bold lg:text-base">{{ $t('nanny') }}</span>
        <p class="text-xs mt-1 lg:text-sm">{{ $t('nannyDesc') }}
        </p>
      </div>
    </div>
    <!-- BUFFMAKER -->
    <div class="relative group mt-12 pb-2/3">
      <img src="@/images/games.png" alt="games"
        class="absolute w-full h-full rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <div
        class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-gray-400 bg-opacity-20 lg:opacity-0 lg:group-hover:opacity-100 lg:bg-gray-200 lg:bg-opacity-30 xl:p-8">
        <span class="text-sm font-bold lg:text-base">{{ $t('gameProject') }}</span>
        <p class="text-xs font-medium mt-1 lg:text-sm">{{ $t('gameProjectDesc') }}
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
