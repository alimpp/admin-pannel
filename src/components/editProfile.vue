<template>
  <div class="editProfile">

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit Profile
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Edit Profile</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control mt-1" placeholder="Name" v-model="name">
               <input type="text" class="form-control mt-1" placeholder="Email" v-model="email">
                <input type="text" class="form-control mt-1" placeholder="Country" v-model="country">
                 <input type="text" class="form-control mt-1" placeholder="Phone Number" v-model="phoneNumber">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
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
        profile : this.$store.state.profile ,  
        name : '' , 
        email : '' ,
        country : '' , 
        phoneNumber : '' ,
      }
     } , 
     mounted(){
        this.name = this.profile.name
        this.email = this.profile.email
        this.country = this.profile.country
        this.phoneNumber = this.profile.phoneNumber
     }
}
</script>

<style>

</style>