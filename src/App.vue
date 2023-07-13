<template>
  <div class="grid grid-cols-2 m-60">
    <div>
      <NameAndProfession />
      <MyTechnologies />
      <MySocials />
    </div>
  </div>
</template>

<script>
import NameAndProfession from './components/NameAndProfession.vue'
import MyTechnologies from './components/MyTechnologies.vue'
import MySocials from './components/MySocials.vue'
export default {
  name: 'App',
  components: {
    NameAndProfession,
    MyTechnologies,
    MySocials
  }
}
</script>
