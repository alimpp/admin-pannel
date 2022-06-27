<template>
  <div class="meets">
        <meetsDataComponent/>
  </div>
</template>

<script>
import meetsDataComponent from '../components/dataComponets/meetsDataComponent.vue'
export default {
   computed : {} ,
   components : {meetsDataComponent} 
}
</script>

<style scoped >
.meets{height: 100vh; overflow: scroll; display: flex; flex-direction: column;}
@media (max-width: 1200px) {
     .meets{justify-content: inherit;}
}
</style>