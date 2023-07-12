<template>
  <div class="grid grid-cols-2 m-60">
    <NameAndProfession />
  </div>
</template>

<script>
import NameAndProfession from './components/atoms/NameAndProfession'
export default {
  name: 'App',
  components: {
    NameAndProfession
  }
}
</script>
