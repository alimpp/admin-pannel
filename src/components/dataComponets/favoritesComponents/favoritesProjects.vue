<template>
  <div class="favoritesProjects column mt-4 animate__animated animate__slideInRight">
   <div class="row">
    <div class="col-lg-12 " v-for="project in getFavoritesProjects" :key="project.id">
       <a :href="`/Projects/${project.id}`" class="link column">
       <span class="blue_color size_x">Project Name</span>
       <span class="dark_color size_y py-1 px-1" style="background: #f5f5f5;">{{project.name}}</span>
       <span class="blue_color size_x">Create Time</span>
       <span class="dark_color size_y py-1 px-1" style="background: #f5f5f5;">{{project.createTime}}</span>
       <span class="blue_color size_x">Create By</span>
       <span class="dark_color size_y py-1 px-1" style="background: #f5f5f5;">{{project.createBy}}</span>
       </a>
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