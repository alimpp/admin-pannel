<template>
  <div class="projects">
      <h1>{{test}}</h1>
 
  </div>
</template>

<script>

export default {
   components : {} ,
   computed : {
     test(){
      return this.$store.getters['Users/getTest']
     }
   }
}
</script>

<style>

</style>