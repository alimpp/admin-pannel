<template>
  <div class="userData d-flex" v-for="user in getUsers" :key="user.id">
      <img class="project_user_profile_pic mx-2 mt-3" :src="user.img" alt="ERROR">
  </div>
</template>

<script>
export default {
   computed : {
    getUsers(){
       return this.$store.getters['Users/getUsers']
    }
   }
}
</script>

<style>

</style>