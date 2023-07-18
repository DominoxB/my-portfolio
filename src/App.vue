<template>
      <div id="charger" class="sticky top-2 mr-2 mt-2 font-roboto text-white flex justify-end">
      <select v-model="$i18n.locale" class="cursor-pointer bg-transparent">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ locale }}
        </option>
      </select>
    </div>
  <div class="m-10 md:grid md:grid-cols-2 md:m-40 font-roboto">
    <div class="md:sticky md:top-40 md:h-[calc(100vh-528px)]">
      <NameAndProfession />
      <AboutMe />
      <MyTechnologies />
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
import AboutMe from './components/AboutMe.vue'
import ProfessionalExperience from './components/ProfessionalExperience.vue'
import MyProjects from './components/MyProjects.vue'

export default {
  name: 'App',
  components: {
    NameAndProfession,
    MyTechnologies,
    MySocials,
    AboutMe,
    ProfessionalExperience,
    MyProjects
  }
}
</script>
