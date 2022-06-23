<template>
  <div class="favoritesData">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <redCart class="mt-3"/>
        </div>
         <div class="col-lg-6">
           <blueCart class="mt-3"/>
         </div>
      </div>
      <div class="col-lg-12">
        <button class="btn btn-info mt-3">Projects</button>
        <span class="pannelBadge mx-2">20</span>
        <button class="btn btn-warning mt-3">Meet</button>
        <span class="pannelBadge mx-2">20</span>
        <button class="btn btn-primary mt-3">Posts</button>
        <span class="pannelBadge mx-2">20</span>
      </div>
    </div>
  </div>
</template>

<script>
import redCart from '../cardComponents/redCart.vue'
import blueCart from '../cardComponents/blueCart.vue'
export default {
   components : {redCart , blueCart}
}
</script>

<style>

</style>