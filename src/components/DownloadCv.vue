<template>
  <div class="mt-12">
    <a :href="`${publicPath}cv.pdf`" download="Dominika_Biedulska_CV">
      <button class="border p-2 text-white tracking-wider hover:bg-slate-800 uppercase text-sm">{{ $t('btn') }}</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadCv',
  setup() {
    const publicPath = process.env.BASE_URL
    return {
      publicPath
    }
  }
}
</script>