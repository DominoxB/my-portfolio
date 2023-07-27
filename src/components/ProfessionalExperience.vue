<template>
  <div class="text-white text-justify lg:pt-20">
    <span class="uppercase font-semibold text-2xl">{{ $t('experience') }}</span>
    <h3 class="mt-2 font-medium">{{ $t('job') }}</h3>
    <p class="italic">{{ $t('enterPreis') }}</p>
    <p class="italic">{{ $t('jobDate') }}</p>
    <p class="text-sm">{{ $t('jobDesc') }}
    </p>
    <h3 class="mt-8 font-medium">{{ $t('mentoring') }}</h3>
    <p class="italic">{{ $t('enterPreis') }}</p>
    <p class="italic">{{ $t('mentoringDate') }}</p>
    <p class="text-sm">{{ $t('mentoringDesc') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfessionalExperience'
}
</script>
