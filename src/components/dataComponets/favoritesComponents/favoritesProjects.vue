<template>
  <div class="favoritesProjects column mt-4 animate__animated animate__slideInRight">
   <div class="row">
    <div class="col-lg-12 " v-for="project in getFavoritesProjects" :key="project.id">
       <div class="row">
      <div class="col-lg-6">
      <router-link :to="`/Projects/${project.id}`" class="link column justify_content mt-5">
       <span class="blue_color size_x">Project Name</span>
       <span class="dark_color size_y py-1 px-1 bg-light">{{project.name}}</span>
       <span class="blue_color size_x">Create Time</span>
       <span class="dark_color size_y py-1 px-1 bg-light">{{project.createTime}}</span>
       <span class="blue_color size_x">Create By</span>
       <span class="dark_color size_y py-1 px-1 bg-light">{{project.createBy}}</span>
      </router-link>
       </div>
       <div class="col-lg-6">
       <img src="./project.jpeg" alt="Error" style="width:100%; height:300px;">
       </div>
       </div>
       <hr>
    </div>
   </div>
  </div>
</template>

<script>
export default {
   computed : {
    getFavoritesProjects(){
        return this.$store.getters['FavoritesProjects/getFavoritesProjects']
    } , 
   }
}
</script>

<style>

</style>