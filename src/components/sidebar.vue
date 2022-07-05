<template>
  <div class="sidebar">

      <div class="side column bg-dark p-2 side_anim">
         <div class="mb-2 mt-5 bg-primary justify_content_align_items" style="border-radius:10px; height:60px;">  <span class="light_color size_c px-2">Dashboard</span> </div>
         
          <div class="d-flex bg-light mt-2 mb-2" style="border-radius:10px;">
          <img class="profile_pic mx-2  mt-1 mb-1" src="./img/adm.jpg" alt="ERROR">
           <div class="column mx-3 mt-2">
                    <h5 class="dark_color">{{profile.name}}</h5>
                    <span class="dark_color size_y">{{profile.email}}</span>
           </div>
          </div>

          <div class="column mt-5 mx-3">
          <router-link class="light_color size_x text_none" to="/">
          <div class="d-flex">
            <i class="bi bi-house-fill size_a "></i> 
            <span class="size_y pt-3 px-2 ">Home</span>
          </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Projects">
            <div class="d-flex">
            <i class="bi bi-kanban size_a >"></i> 
            <span class="size_y pt-3 px-2 >">Projects</span>
            </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Meet">
          <div class="d-flex">
          <i class="bi bi-microsoft size_a >"></i>
          <span class="size_y pt-3 px-2 >">Meet</span>
          </div>
          </router-link>

          <router-link class="light_color text_none"  to="/Posts">
          <div class="d-flex">
          <i class="bi bi-layout-text-window-reverse size_a >"></i>
          <span class="size_y pt-3 px-2 >">Posts</span>
          </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Favorites">
          <div class="d-flex">
          <i class="bi bi-star size_a >"></i> 
          <span class="size_y pt-3 px-2 >">Favorites</span>
          </div>
          </router-link>

          <router-link class="light_color text_none" to="/Profile">
             <div class="d-flex">
             <i class="bi bi-person size_a >"></i>
             <span class="size_y pt-3 px-2 >">Profile</span>
             </div>
          </router-link>

          </div>

          <div class="d-flex justify_content_align_items pt-5" style="margin-top:200px;">
                <i class="bi bi-instagram px-2 light_color size_x"></i>
                <i class="bi bi-twitter px-2 light_color size_x"></i>
                <i class="bi bi-facebook px-2 light_color size_x"></i>
                <i class="bi bi-linkedin px-2 light_color size_x"></i>
          </div>

          <div>
          <span class="size_x light_color justify_content_align_items">Lorem ipsum dolor sit amet...</span>
          </div>
      
      </div>

      <div class="responsive">
     
      <i class="bi bi-list size_b px-3 py-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h3 class="blue_color pt-2">Dashboard</h3>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body column">
         
          <div class="d-flex bg-primary mt-2 mb-2" style="border-radius:10px; height:80px;">
          <img class="profile_pic mx-2  mt-2 mb-2" src="./img/adm.jpg" alt="ERROR">
           <div class="column mx-3 mt-2">
                    <h5 class="light_color">{{profile.name}}</h5>
                    <span class="light_color size_y">{{profile.email}}</span>
           </div>
          </div>

          <div class="column mt-5 mx-3">
          <router-link class="light_color size_x text_none" to="/">
          <div class="d-flex">
            <i class="bi bi-house-fill size_a blue_color"></i> 
            <span class="size_y pt-3 px-2 blue_color">Home</span>
          </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Projects">
            <div class="d-flex">
            <i class="bi bi-kanban size_a blue_color"></i> 
            <span class="size_y pt-3 px-2 blue_color">Projects</span>
            </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Meet">
          <div class="d-flex">
          <i class="bi bi-microsoft size_a blue_color"></i>
          <span class="size_y pt-3 px-2 blue_color">Meet</span>
          </div>
          </router-link>

          <router-link class="light_color text_none"  to="/Posts">
          <div class="d-flex">
          <i class="bi bi-layout-text-window-reverse size_a blue_color"></i>
          <span class="size_y pt-3 px-2 blue_color">Posts</span>
          </div>
          </router-link>

          <router-link class="light_color size_x text_none" to="/Favorites">
          <div class="d-flex">
          <i class="bi bi-star size_a blue_color"></i> 
          <span class="size_y pt-3 px-2 blue_color">Favorites</span>
          </div>
          </router-link>

          <router-link class="light_color text_none" to="/Profile">
             <div class="d-flex">
             <i class="bi bi-person size_a blue_color"></i>
             <span class="size_y pt-3 px-2 blue_color">Profile</span>
             </div>
          </router-link>

          </div>

          <div class="d-flex justify_content_align_items pt-5" style="margin-top:200px;">
              <i class="bi bi-instagram px-2 gray_color size_x"></i>
              <i class="bi bi-twitter px-2 gray_color size_x"></i>
              <i class="bi bi-facebook px-2 gray_color size_x"></i>
              <i class="bi bi-linkedin px-2 gray_color size_x"></i>
          </div>

          <div>
          <span class="size_x gray_color justify_content_align_items">Lorem ipsum dolor sit amet</span>
          </div>
        </div>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
    computed : {
      profile(){
        return this.$store.state.profile
      }
    }
}
</script>

<style scoped >
.side{
    width: 400px;
    height: 100vh;
}
.responsive{
    display: none;
}
.router-link-active{
  background: #0d6efd;
  color: #fafafa;
  padding-left: 30px;
  border-radius: 10px;
  transition: 1s;
}

@media (max-width:1200px) {
    .side{display: none;}
    .responsive{display: block;}
    .router-link-active{box-shadow: 3px 3px 3px #707070; background: none;}
}
</style>