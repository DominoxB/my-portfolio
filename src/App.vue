<template>
  <div class="flex justify-end gap-10">
    <MySocialsMobile />
    <div id="charger" class="mr-2 mt-8 font-roboto text-white flex justify-end">
      <select v-model="$i18n.locale" class="cursor-pointer bg-black">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
  <div class="mx-10 lg:m-0 font-roboto lg:grid lg:grid-cols-2 lg:mx-32">
    <div class="text-center lg:text-start lg:sticky lg:top-20 lg:h-[calc(100vh-117px)]">
      <NameAndProfession />
      <AboutMe />
      <MyTechnologies />
      <DownloadCv />
      <MySocials />
    </div>
    <div class="mt-12 lg:mt-0 lg:ml-20 xl:ml-40">
      <ProfessionalExperience />
      <MyProjects />
    </div>
  </div>
</template>

<script>
import NameAndProfession from './components/NameAndProfession.vue'
import MyTechnologies from './components/MyTechnologies.vue'
import MySocials from './components/MySocials.vue'
import MySocialsMobile from './components/MySocialsMobile.vue'
import AboutMe from './components/AboutMe.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyProjects from './components/MyProjects.vue'
import DownloadCv from './components/DownloadCv.vue'

export default {
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
}
</script>
