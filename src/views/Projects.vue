<template>
  <div class="projects scrollbar">
     <projectDataCP/>
  </div>
</template>

<script>
import projectDataCP from '../components/dataComponets/projectDataCP.vue'
export default {
   components : {projectDataCP} ,
   computed : {
    
   }
}
</script>

<style>
.projects{height: 100vh; overflow: scroll; display: flex; flex-direction: column;}
@media (max-width: 1200px) {
     .projects{justify-content: inherit;}
}
</style>