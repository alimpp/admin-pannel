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

      <div class="col-lg-12 mt-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Favorites List</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item pointer">
                    <a class="nav-link" @click="isProjects">Projects <span class="pannelBadge mx-2">{{projectsBadge}}</span></a> 
                  </li>
                  <li class="nav-item pointer">
                    <a class="nav-link"  @click="isPosts">Posts <span class="pannelBadge mx-2">{{postsBadge}}</span></a>
                  </li>
                  <li class="nav-item pointer">
                    <a class="nav-link" @click="isMeets">Meets <span class="pannelBadge mx-2">{{meetsBadge}}</span></a>
                  </li>
                </ul>
        
              </div>
                <div class="d-flex">
                <button class="btn btn-danger" @click="clearProjects" v-if="projects">Clear Projects</button>
                <button class="btn btn-danger" @click="clearPosts" v-if="posts">Clear Posts</button>
                <button class="btn btn-danger" @click="clearMeets" v-if="meets">Clear Meets</button>
                </div>
            </div>
         </nav>
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
     } , 
     postsBadge(){
      return this.$store.getters['FavoritesPosts/badgeFavoritesPosts']
     } , 
     meetsBadge(){
      return this.$store.getters['FavoritesMeets/badgeFavoritesMeets']
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
    clearProjects(){
      return this.$store.commit('FavoritesProjects/clearFavoritesProjects')
    } , 
    clearPosts(){
      return this.$store.commit('FavoritesPosts/clearFavoritesPosts')
    } , 
    clearMeets(){
      return this.$store.commit('FavoritesMeets/clearFavoritesMeets')
    }
   } ,
   components : {redCart , blueCart ,favoritesProjects ,favoritesPosts ,favoritesMeets}
}
</script>

<style>

</style>