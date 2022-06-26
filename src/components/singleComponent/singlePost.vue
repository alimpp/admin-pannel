<template>
  <div class="singlePost">
    <div class="container">
    
            <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-5">
               <img :src="post.postImage" alt="Error" style="width:100%; height:400px; border-radius:10px;">
              </div>
              <div class="col-lg-7 column">
                        <div class="d-flex">
                        <img class="project_user_profile_pic my-2" :src="post.userImage" alt="Error">
                        <span class="dark_color size_x py-3 px-2">{{post.createBy}}</span>
                        </div>
                        <span class="dark_color size_y py-1">{{post.description}}</span>
                        <div class="d-flex">
                         <button class="btn btn-primary my-3" @click="addPostToFavorites(post)">Add To Favorites</button>
                         <button class="btn btn-danger my-3 mx-2" @click="goToPosts">Go To Posts</button>
                        </div>
                        <span class="dark_color size_y py-1">{{post.description}}</span>
              </div>
            </div>
            </div>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return{
      posts : [] , 
      post : [] ,
    }
   } , 
   mounted(){
    this.posts = this.$store.getters['Posts/getPosts']
    this.post = this.posts.find(
      p => p.id == this.$route.params.id
    )
   } , 
   methods : {
    addPostToFavorites(post){
        return this.$store.dispatch('FavoritesPosts/addPostToFavorites' , post)
    } ,
    goToPosts(){
        return this.$router.push('/Posts')
    } , 
   }
}
</script>

<style>
.singlePost{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .singlePost{justify-content: inherit;}
}
</style>