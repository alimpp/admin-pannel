<template>
  <div class="homeDC">
   <progressBarCircle/>
   <progressBarHorizontal/>
   <progressCard/>
  </div>
</template>

<script>
import progressBarCircle from '../progressBarCircle.vue'
import progressBarHorizontal from '../progressBarHorizontal.vue'
import progressCard from '../progressCard.vue'
export default {
   components : {progressBarCircle , progressBarHorizontal , progressCard}
}
</script>

<style>

</style>