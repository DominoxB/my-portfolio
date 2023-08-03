<template>
  <div class="mt-12">
    <a :href="`${publicPath}cv.pdf`" download="Dominika_Biedulska_CV">
      <button class="border border-white p-2 tracking-wider hover:text-slate-200 hover:border-slate-200 uppercase text-sm">{{ $t('btn') }}</button>
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
