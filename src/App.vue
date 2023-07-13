<template>
  <div class="grid grid-cols-2 m-60">
    <div class="sticky top-60 h-[calc(100vh-472px)]">
      <NameAndProfession />
      <MyTechnologies />
      <MySocials />
    </div>
    <div>
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
