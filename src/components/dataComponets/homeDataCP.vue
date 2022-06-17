<template>
  <div class="homeDC">
   <progressBarCircle/>
    <div class="row">
      <div class="col-lg-6">
         <chartLine class="my-4 animate__animated animate__fadeInLeft"/>
      </div>
      <div class="col-lg-6">
         <chart class="my-4 animate__animated animate__fadeInRight"/>
      </div>
    </div>
   <progressBarHorizontal/>
  </div>
</template>

<script>
import progressBarCircle from '../progressBarCircle.vue'
import progressBarHorizontal from '../progressBarHorizontal.vue'
import chart from '../chart.vue'
import chartLine from '../chartLine.vue'
export default {
   components : {progressBarCircle , progressBarHorizontal , chart , chartLine }
}
</script>

<style>

</style>