<template>
  <div class="text-white text-justify">
    <span class="uppercase font-semibold text-2xl">{{ $t('experience') }}</span>
    <li class="mt-2 font-medium">{{ $t('job') }}</li>
    <p class="italic">{{ $t('enterPreis') }}</p>
    <p class="italic">{{ $t('jobDate') }}</p>
    <p class="text-sm">{{ $t('jobDesc') }}
    </p>
    <li class="mt-8 font-medium">{{ $t('mentoring') }}</li>
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
