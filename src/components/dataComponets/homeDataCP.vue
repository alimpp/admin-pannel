<template>
  <div class="homeDC">
   <progressBarCircle/>
    <div class="row">
      <div class="col-lg-6">
         <chartLine class="my-4 mx-3 animate__animated animate__fadeInLeft"/>
      </div>
      <div class="col-lg-6">
         <chart class="my-4 animate__animated animate__fadeInRight"/>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
         <progressBarHorizontal/>
      </div>
      <div class="col-lg-6 column px-5 opa_anim">
         <span class="blue_color size_c pt-5">Lorem ipsum dolor, sit amet consectetur...</span>
         <span class="dark_color size_y pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui nam voluptatem obcaecati deserunt nostrum libero aspernatur iure. Laborum exercitationem corrupti doloremque maiores minima quo libero molestiae fugiat nostrum praesentium!</span>
      </div>
    </div>
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