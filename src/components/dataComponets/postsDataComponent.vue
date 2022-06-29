<template>
  <div class="postsData">
    <div class="container">
       <div class="row mt-2">
       <div class="col-lg-6">
            <blueCart class="animate__animated animate__fadeInLeft mt-2"/>
       </div>
       <div class="col-lg-6">
         <redCart class="animate__animated animate__fadeInRight mt-2"/>
       </div>
       </div>

       <div class="row ">
        <div class="col-lg-4 mt-2 px-2 py-2 animate__animated animate__rotateInUpRight" v-for="post in getPosts" :key="post.id">
          <a :href="`/Posts/${post.id}`" class="link">
          <div class="d-flex">
          <img class="project_user_profile_pic my-2" :src="post.userImage" alt="Error">
          <span class="dark_color size_x py-3 px-2">{{post.createBy}}</span>
         </div>
           <img :src="post.postImage" alt="Error" style="width:100%; height:300px; border-radius:10px;">
           <span class="dark_color size_y">{{post.description}}</span>
          </a>
        </div>
       </div>
       
    </div>
  </div>
</template>

<script>
import redCart from '../cardComponents/redCart.vue'
import blueCart from '../cardComponents/blueCart.vue'
export default {
   components : {redCart , blueCart} ,
   computed : {
    getPosts(){
      return this.$store.getters['Posts/getPosts']
    }
   }
}
</script>

<style>

</style>