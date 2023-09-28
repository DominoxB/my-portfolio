<template>
  <div class="mt-12 mb-10 text-gray-900">
    <span class="uppercase font-semibold text-2xl text-white">{{ $t('projects') }}</span>
    <!-- DONUTINO -->
    <div class="relative group pb-2/3">
      <img src="@/images/donutino.png" alt="donutino"
        class="absolute h-full w-full object-cover rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <a href="https://dominoxb.github.io/donutshop/" target="_blank">
        <div
          class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-sky-100 bg-opacity-80 lg:opacity-0 lg:group-hover:opacity-100 lg:bg-opacity-60 xl:p-8">
          <span class="text-sm font-bold lg:text-base" v-html="$t('shopName')"></span>
          <p class="text-xs font-medium mt-1 lg:text-sm">{{ $t('shopDesc') }}
          </p>
        </div>
      </a>
    </div>
    <!-- ZNANA NIANIA -->
    <div class="relative group mt-12 pb-2/3">
      <img src="@/images/zn.png" alt="zn"
        class="absolute h-full w-full object-cover rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <div
        class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-sky-100 bg-opacity-80 lg:opacity-0 lg:group-hover:opacity-100 lg:bg-opacity-60 xl:p-8">
        <span class="text-sm font-bold lg:text-base" v-html="$t('nanny')"></span>
        <p class="text-xs mt-1 lg:text-sm">{{ $t('nannyDesc') }}
        </p>
      </div>
    </div>
    <!-- GAMING PROJECT -->
    <div class="relative group mt-12 pb-2/3">
      <img src="@/images/games.png" alt="games"
        class="absolute w-full h-full rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <div
        class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-sky-100 bg-opacity-90 lg:opacity-0 lg:group-hover:opacity-100 lg:bg-opacity-70 xl:p-8">
        <span class="text-sm font-bold lg:text-base" v-html="$t('gameProject')"></span>
        <p class="text-xs mt-1 lg:text-sm">{{ $t('gameProjectDesc') }}
        </p>
      </div>
    </div>
    <div class="mt-1">
      <a href="https://pl.freepik.com/darmowe-wektory/gracze-uzywajacy-roznych-urzadzen-i-grajacy-na-telefonie-komorkowym-tablecie-laptopie-konsoli-ilustracja-kreskowka_12699087.htm#page=2&query=computer%20games&position=40&from_view=search&track=country_rows_v1"
        class="text-[10px] text-gray-100">{{ $t('freePik') }}</a>
    </div>
    <!-- HANGMAN -->
    <div class="relative group mt-12 pb-2/3">
      <img src="@/images/hangman.png" alt="hangman"
        class="absolute w-full h-full rounded-md border-2 border-white mt-2 opacity-40 transition duration-700 lg:opacity-100 lg:group-hover:opacity-30" />
      <a href="https://dominoxb.github.io/gra-wisielec/" target="_blank">
        <div
          class="p-2 w-full opacity-90 transition duration-700 absolute bottom-0 text-center bg-sky-100 bg-opacity-90 lg:opacity-0 lg:group-hover:opacity-100 lg:bg-opacity-70 xl:p-8">
          <span class="text-sm font-bold lg:text-base" v-html="$t('hangman')"></span>
          <p class="text-xs mt-1 lg:text-sm">{{ $t('hangmanDesc') }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
