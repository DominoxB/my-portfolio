<template>
  <div class="flex justify-end gap-6">
    <MySocialsMobile />
    <div id="charger" class="mr-2 mb-4 mt-8 font-roboto text-white flex justify-end lg:mb-0">
      <select v-model="$i18n.locale" class="cursor-pointer bg-black">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
  <div class="text-white mx-10 font-roboto lg:grid lg:grid-cols-2 lg:mx-80">
    <div class="text-center lg:text-start lg:pt-16 lg:sticky lg:top-20 lg:h-[calc(100vh-117px)] lg:mr-16">
      <NameAndProfession />
      <AboutMe />
      <MyTechnologies />
      <DownloadCv />
      <MySocials />
    </div>
    <div class="mt-12 lg:mt-8 lg:ml-16">
      <ProfessionalExperience />
      <MyProjects />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameAndProfession from './components/NameAndProfession.vue'
import MyTechnologies from './components/MyTechnologies.vue'
import MySocials from './components/MySocials.vue'
import MySocialsMobile from './components/MySocialsMobile.vue'
import AboutMe from './components/AboutMe.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyProjects from './components/MyProjects.vue'
import DownloadCv from './components/DownloadCv.vue'

export default defineComponent({
  name: 'App',
  components: {
    NameAndProfession,
    MyTechnologies,
    MySocials,
    MySocialsMobile,
    AboutMe,
    ProfessionalExperience,
    MyProjects,
    DownloadCv
  }
})
</script>
