<template>
  <div class="profileData">
  <div class="container">

  <div class="col-lg-12 column mt-3">
        <span class="blue_color size_x">Name</span>
        <span class="dark_color size_y">{{profile.name}}</span>
        <hr>
        <span class="blue_color size_x">Email</span>
        <span class="dark_color size_y">{{profile.email}}</span>
        <hr>
        <span class="blue_color size_x">Country</span>
        <span class="dark_color size_y">{{profile.country}}</span>
        <hr>
        <span class="blue_color size_x">Phone Number</span>
        <span class="dark_color size_y">{{profile.phoneNumber}}</span>
        <hr>
        <editProfile/>
    </div>

     <progressBarCircle class="animate__animated animate__backInDown"/>
    <div class="row">
      <div class="col-lg-6">
         <chartLine class="my-4 mx-3 animate__animated animate__fadeInLeft mt-5"/>
      </div>
      <div class="col-lg-6">
         <chart class="my-4 animate__animated animate__fadeInRight"/>
      </div>
    </div>

  </div>
  </div>
</template>

<script>
import progressBarCircle from '../progressBarCircle.vue'
import chartLine from '../chartLine.vue'
import chart from '../chart.vue'
import editProfile from '../editProfile.vue'
export default {
   data(){
    return{
       profile : this.$store.state.profile
    }
  } , 
   components : {progressBarCircle , chartLine , chart , editProfile} , 
   computed : {

   } ,
}
</script>

<style>

</style>