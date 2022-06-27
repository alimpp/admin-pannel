<template>
  <div class="singleMeet">
      <div class="container">
      
      </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      meets : [] , 
      meet : [] ,
    }
   } , 
   mounted(){
      this.meets = this.$store.getters['Meets/getMeets']
      this.meet = this.meets.find(
        m => m.id == this.$route.params.id
      )
   }
}
</script>

<style scoped >
.singleMeet{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .singleMeet{justify-content: inherit;}
}
</style>