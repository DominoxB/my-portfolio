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
  <div class="m-10 md:grid md:grid-cols-2 md:m-32 font-roboto">
    <div class="text-center md:text-start md:sticky md:top-40 md:h-[calc(100vh-617px)]">
      <NameAndProfession />
      <AboutMe />
      <MyTechnologies />
      <DownloadCv />
      <MySocials />
    </div>
    <div class="mt-12 md:mt-0 md:ml-40">
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
