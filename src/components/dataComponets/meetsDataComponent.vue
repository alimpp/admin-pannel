<template>
  <div class="meetsData">
     <div class="container">
        <div class="row">
        <div class="col-lg-6 column mt-2 justify_content animate__animated animate__fadeInLeft">
           <span class="blue_color size_c">Lorem ipsum, dolor sit amet consectetur...</span>
           <span class="dark_color size_y">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quasi debitis laborum aut soluta molestias magni est. Consequatur dolorem maxime sequi perspiciatis illum, consequuntur quam praesentium vel, fuga eligendi recusandae</span>
        </div>
        <div class="col-lg-6">
        <redCart class="mt-2 animate__animated animate__fadeInRight"/>
        </div>
        </div>
        
        <div class="col-lg-12 my-3 animate__animated animate__fadeInRight" v-for="meet in getMeets" :key="meet.id">
            <router-link :to="`/Meet/${meet.id}`" class="link column">
            <div class="row">
            <div class="col-lg-6 column justify_content">
                  <div class="d-flex">
                  <span class="blue_color size_y">Meet Name</span>
                  <span class="dark_color size_y px-2">{{meet.name}}</span>
                </div>
                <div class="d-flex">
                  <span class="blue_color size_y">Time Meet</span>
                  <span class="dark_color size_y px-2">{{meet.time}}</span>
                </div>
                <span class="dark_color size_y px-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus id quidem vel quo quaerat dignissimos totam inventore libero ex commodi, ea optio. Hic distinctio temporibus ullam numquam quod quia cupiditate!</span>
            </div>
            <div class="col-lg-6">
            <img src="./meeting.jpg" alt="Error" style="width:100%; height:300px; border-radius:10px;">
            </div>
            </div>
            </router-link>
            <hr>
        </div>
        
     </div>
  </div>
</template>

<script>
import blueCart from '../cardComponents/blueCart.vue'
import redCart from '../cardComponents/redCart.vue'
export default {
   computed : {
     getMeets(){
        return this.$store.getters['Meets/getMeets']
     }
   } , 
   components : {blueCart , redCart} ,
}
</script>

<style>

</style>