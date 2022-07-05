<template>
  <div class="favoritesPosts animate__animated animate__slideInRight">
       <div class="col-lg-12 mt-2" v-for="post in getFavoritesPosts" :key="post.id">
       <div class="row">
      
       <div class="col-lg-4">
       <router-link :to="`/Posts/${post.id}`" class="link">
          <img :src="post.postImage" alt="Error" style="width:100%; height:300px; border-radius:10px;">
       </router-link>
       </div>
       <div class="col-lg-8">
        <router-link :to="`/Posts/${post.id}`" class="link justify_content column">
          <div class="d-flex">
          <img class="project_user_profile_pic my-2" :src="post.userImage" alt="Error">
          <span class="dark_color size_x py-3 px-2">{{post.createBy}}</span>
         </div>
             <span class="dark_color size_y py-1">{{post.description}}</span>
        </router-link>
       </div>
    
       </div>
       </div>
  </div>
</template>

<script>
export default {
   computed : {
    getFavoritesPosts(){
      return this.$store.getters['FavoritesPosts/getFavoritesPosts']
    }
   }
}
</script>

<style>

</style>