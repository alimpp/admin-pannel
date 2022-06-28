<template>
  <div class="singleMeet">
      <div class="container">
        <div class="col-lg-12 opa_anim">
        <div class="row">
        <div class="col-lg-6 column justify_content">
                <div class="d-flex">
                <span class="blue_color size_y">Meet Name</span>
                <span class="dark_color size_y px-2">{{meet.name}}</span>
                </div>
                <div class="d-flex">
                  <span class="blue_color size_y">Time Meet</span>
                  <span class="dark_color size_y px-2">{{meet.time}}</span>
                </div>
                <span class="dark_color size_y">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus id quidem vel quo quaerat dignissimos totam inventore libero ex commodi, ea optio. Hic distinctio temporibus ullam numquam quod quia cupiditate!</span>
                <div class="d-flex">
                <button class="btn btn-primary my-2">Add To Favorite</button>
                <button class="btn btn-danger my-2 mx-2" @click="goToProject">Go To Meets</button>
                </div>
        </div>
        <div class="col-lg-6">
        <img src="./meeting.jpg" alt="Error" style="width:100%; height:300px;">
        </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      meets : [] , 
      meet : [] ,
    }
   } , 
   mounted(){
      this.meets = this.$store.getters['Meets/getMeets']
      this.meet = this.meets.find(
        m => m.id == this.$route.params.id
      )
   } , 
   methods : {
    goToProject(){
      return this.$router.push('/Meet')
    }
   }
}
</script>

<style scoped >
.singleMeet{height: 100vh; overflow: scroll; display: flex; flex-direction: column; justify-content: center;}
@media (max-width: 1200px) {
     .singleMeet{justify-content: inherit;}
}
</style>