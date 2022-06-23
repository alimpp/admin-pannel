<template>
  <div class="singleProject opa_anim p-5 ">
    <span class="blue_color size_c">Project Name</span>
    <span class="dark_color size_x">{{project.name}}</span>
    <span class="blue_color size_c">Create By</span>
    <span class="dark_color size_x">{{project.createBy}}</span>
    <span class="blue_color size_c">Create Time</span>
    <span class="dark_color size_x">{{project.createTime}}</span>
    <span class="blue_color size_c">Description</span>
    <span class="dark_color size_x">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi vitae animi sed eos hic debitis obcaecati praesentium perspiciatis voluptate modi dolorum, ipsa eum optio. Deleniti rem eum at! Assumenda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nemo beatae reprehenderit, quae incidunt voluptas explicabo mollitia, delectus ducimus provident, harum ut at magnam illo veritatis nihil facere doloribus quidem</span>
    <span class="blue_color size_c">Users Project</span>
    <div class="d-flex">
       <userData/>
    </div>
    <div class="d-flex">
       <button class="btn btn-primary mt-4">Add To Favorite</button>
       <button class="btn btn-danger mt-4 mx-2" @click="goToProjects">Back To Projects</button>
    </div>
    <progressBarCircle/>
  </div>
</template>

<script>
import userData from '../dataComponets/userData.vue'
import progressBarCircle from '../progressBarCircle.vue'
export default {
   data(){
    return{
      projects : [] , 
      project : [] ,
    }
   } , 
   mounted(){
    this.projects = this.$store.getters['Projects/getProject']
    this.project = this.projects.find(
      p => p.id == this.$route.params.id
    )
   } , 
   components : {userData , progressBarCircle} , 
   methods : {
    goToProjects(){
       this.$router.push('/Projects')
    }
   }
}
</script>

<style scoped >
.singleProject{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .singleProject{justify-content: inherit;}
}
</style>