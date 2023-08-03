<template>
  <div class="mt-12">
    <a :href="`${publicPath}cv.pdf`" download="Dominika_Biedulska_CV">
      <button class="border border-blue-200 p-2 text-blue-200 tracking-wider hover:text-blue-300 hover:border-blue-300 uppercase text-sm">{{ $t('btn') }}</button>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DownloadCv',
  setup() {
    const publicPath = process.env.BASE_URL
    return {
      publicPath
    }
  }
})
</script>
