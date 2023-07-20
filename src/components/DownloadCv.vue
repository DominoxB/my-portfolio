<template>
  <div class="mt-12">
    <a href="cv.pdf" download>
      <button class="border p-2 text-white tracking-wider  hover:bg-slate-800 uppercase text-sm">{{ $t('btn') }}</button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadCv',
  setup() {
  }
}
</script>