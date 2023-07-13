<template>
  <div class="grid grid-cols-2 m-60">
    <div>
      <NameAndProfession />
      <MyTechnologies />
    </div>
  </div>
</template>

<script>
import NameAndProfession from './components/NameAndProfession.vue'
import MyTechnologies from './components/MyTechnologies.vue'
export default {
  name: 'App',
  components: {
    NameAndProfession,
    MyTechnologies
  }
}
</script>
