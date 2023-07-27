<template>
  <div class="hidden pt-24 text-white font-semibold tracking-widest lg:block">
    <div class="flex items-center gap-4">
      <img src="@/icons/github.png" alt="github" class="w-8 h-8" />
      <a href="https://github.com/DominoxB" target="_blank">
        <span class="">{{ $t('github') }}</span>
      </a>
    </div>
    <div class="flex items-center gap-4 pt-6">
      <img src="@/icons/linkedin.png" alt="github" class="w-8 h-8" />
      <a href="https://www.linkedin.com/in/dominika-biedulska-8845881a4/" target="_blank">
        <span class="">{{ $t('name') }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySocials'
}
</script>
