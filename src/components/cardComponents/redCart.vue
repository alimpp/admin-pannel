<template>
  <div class="redCard">
    <div class="col-lg-12">
        <div class="red_cart">
           <span class="light_color size_x">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cumque exercitationem animi laboriosam voluptatem praesentium...</span>
           <div class="row">
            <div class="col-lg-6">
              <span class="light_color size_z">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sint dicta earum velit dolore cumque ex recusandae explicabo exercitationem sequi excepturi labore atque molestias, placeat quia sit quaerat deserunt in</span>
            </div>
            <div class="col-lg-6">
              <h1 class="light_color" style="font-size:100px;">73%</h1>
            </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped >
.red_cart{
    width: 100%;
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background-image: radial-gradient( circle farthest-corner at 14.2% 24%,  rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%, rgba(239,61,78,0.63) 84.6% );
}
</style>