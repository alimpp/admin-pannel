<template>
  <div class="favoritesMeets animate__animated animate__slideInRight">
     <div class="col-lg-12" v-for="meet in getMeets" :key="meet.id">
        <div class="row">
     
        <div class="col-lg-6">
        <router-link :to="`/Meet/${meet.id}`" class="link column justify_content mt-5">
                <div class="d-flex">
                    <span class="blue_color size_y">Meet Name</span>
                    <span class="dark_color size_y px-2">{{meet.name}}</span>
                </div>
                <div class="d-flex">
                    <span class="blue_color size_y">Time Meet</span>
                    <span class="dark_color size_y px-2">{{meet.time}}</span>
                </div>
                <span class="dark_color size_y">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus id quidem vel quo quaerat dignissimos totam inventore libero ex commodi, ea optio. Hic distinctio temporibus ullam numquam quod quia cupiditate!</span>
        </router-link>
        </div>
      
        <div class="col-lg-6 mt-3">
        <img src="./meeting.jpg" alt="Error" style="width:100%; height:300px; border-radius:15px;">
        </div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
    computed : {
      getMeets(){
        return this.$store.getters['FavoritesMeets/getFavoritesMeets']
      } , 
    }
}
</script>

<style>

</style>