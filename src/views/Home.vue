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
.home{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .home{justify-content: inherit;}
}
</style>