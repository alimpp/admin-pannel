<template>
  <div class="projects scrollbar">
     <projectDataComponent/>
  </div>
</template>

<script>
import projectDataComponent from '../components/dataComponets/projectDataComponent.vue'
export default {
   components : {projectDataComponent} ,
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