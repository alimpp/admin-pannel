<template>
  <div class="projectData">
    <div class="container">
        <div class="row">
       <div class="col-lg-6 column justify_content animate__animated animate__fadeInLeft">
        <span class="blue_color size_c px-4">Lorem ipsum dolor, sit amet consectetur...</span>
        <span class="dark_color size_x px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, ipsa nihil soluta accusamus labore obcaecati placeat recusandae nam quas iusto, accusantium harum maiores consequatur hic optio ab facilis at illum?</span>
      </div>
      <div class="col-lg-6 animate__animated animate__fadeInRight">
        <img src="./project.jpeg" alt="Error" style="width:100%; height:300px;">
      </div>
     </div>

     <div class="row opa_anim">
           
              <div class="col-lg-6 mt-4 p-4 column px-5 justify_content hover_project" v-for="project in getProject" :key="project.id">
               
                <router-link :to="`/Projects/${project.id}`" class="link">
                <div class="d-flex">
                  <span class="blue_color size_y">Project Name</span>
                  <span class="dark_color size_y px-2">{{project.name}}</span>
                </div>
                <div class="d-flex">
                  <span class="blue_color size_y">Create by</span>
                  <span class="dark_color size_y px-2">{{project.createBy}}</span>
                </div>
                <div class="d-flex">
                  <span class="blue_color size_y">Create Time</span>
                  <span class="dark_color size_y px-2">{{project.createTime}}</span>
                </div>
                <div class="d-flex">
                   <span class="dark_color size_y">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur obcaecati praesentium similique dignissimos! Ducimus mollitia corrupti hic accusantium illum voluptate, fugit magnam aspernatur quaerat, magni laboriosam numquam temporibus sint. Vitae.</span>
                </div>
                <chartLine/>
                <hr>
                </router-link>
               
              </div>
              
          </div>
    </div>
  </div>
</template>

<script>
import chartLine from '../chartLine.vue'
import userData from './userData.vue'
import blueCart from '../cardComponents/blueCart.vue'
export default {
    computed : {
      getProject(){
        return this.$store.getters['Projects/getProject']
      } , 
    } , 
    components : {chartLine , userData , blueCart}
}
</script>

<style>

</style>