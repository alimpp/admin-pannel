<template>
  <div class="Profile scrollbar">
      <profileDataComponent/>
  </div>
</template>

<script>
import profileDataComponent from '../components/dataComponets/profileDataComponent.vue'
export default {
  components : {profileDataComponent}
}
</script>

<style scoped >
.Profile{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .Profile{justify-content: inherit;}
}
</style>