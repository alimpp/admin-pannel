<template>
  <div class="home scrollbar">
      <homeDataCP/>
  </div>
</template>

<script>
import homeDataCP from '../components/dataComponets/homeDataCP.vue'
export default {
   components : { homeDataCP }
}
</script>

<style scoped >
.home{height: 100vh; overflow: scroll;}
</style>