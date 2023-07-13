<template>
  <div class="grid grid-cols-2 m-60">
    <div class="sticky top-60 h-[calc(100vh-568px)]">
      <NameAndProfession />
      <AboutMe />
      <MyTechnologies />
      <MySocials />
    </div>
    <div class="ml-40">
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
