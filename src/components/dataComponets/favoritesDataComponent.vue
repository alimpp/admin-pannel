<template>
  <div class="favoritesData">
    <div class="container">

      <div class="row">
        <div class="col-lg-6">
          <redCart class="mt-3 animate__animated animate__fadeInLeft"/>
        </div>
         <div class="col-lg-6">
           <blueCart class="mt-3 animate__animated animate__fadeInRight"/>
         </div>
      </div>

      <div class="col-lg-12">
        <button class="btn btn-info mt-3" @click="isProjects">Projects</button>
        <span class="pannelBadge mx-2">{{projectsBadge}}</span>
        <button class="btn btn-warning mt-3" @click="isMeets">Meet</button>
        <span class="pannelBadge mx-2">20</span>
        <button class="btn btn-primary mt-3" @click="isPosts">Posts</button>
        <span class="pannelBadge mx-2">20</span>
      </div>

      <div class="row">
        <div class="col-lg-12">
           <favoritesProjects v-if="projects"/>
           <favoritesPosts v-if="posts"/>
           <favoritesMeets v-if="meets"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import redCart from '../cardComponents/redCart.vue'
import blueCart from '../cardComponents/blueCart.vue'
import favoritesProjects from '../dataComponets/favoritesComponents/favoritesProjects.vue'
import favoritesPosts from '../dataComponets/favoritesComponents/favoritesPosts.vue' 
import favoritesMeets from '../dataComponets/favoritesComponents/favoritesMeets.vue'
export default {
   data(){
    return{
      projects : true , posts : false , meets : false , 
    }
   } ,
   computed : {
     projectsBadge(){
        return this.$store.getters['FavoritesProjects/badgeFavoritesProjects']
     }
   } ,
   methods : {
    isProjects(){
      this.projects = true 
      this.posts = false 
      this.meets = false
    } ,
    isPosts(){
      this.projects = false 
      this.posts = true 
      this.meets = false
    } ,
    isMeets(){
      this.projects = false 
      this.posts = false 
      this.meets = true
    } ,
   } ,
   components : {redCart , blueCart ,favoritesProjects ,favoritesPosts ,favoritesMeets}
}
</script>

<style>

</style>