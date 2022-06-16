<template>
  <div class="home">
      <progressBarCircle/>
      <progressBarHorizontal/>
      <progressCard/>
  </div>
</template>

<script>
import progressBarCircle from '../components/progressBarCircle.vue'
import progressBarHorizontal from '../components/progressBarHorizontal.vue'
import progressCard from '../components/progressCard.vue'
export default {
   components : {progressBarCircle , progressBarHorizontal , progressCard}
}
</script>

<style scoped >
.home{height: 100vh; overflow: scroll;}
</style>