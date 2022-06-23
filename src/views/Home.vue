<template>
  <div class="home scrollbar">
      <homeDataComponent/>
  </div>
</template>

<script>
import homeDataComponent from '../components/dataComponets/homeDataComponent.vue'
export default {
   components : { homeDataComponent }
}
</script>

<style scoped >
.home{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .home{justify-content: inherit;}
}
</style>