<template>
  <div class="posts">
       <postsDataComponent/>
  </div>
</template>

<script>
import postsDataComponent from '../components/dataComponets/postsDataComponent.vue'
export default {
    components : {postsDataComponent}
}
</script>

<style scoped >
.posts{height: 100vh; overflow: scroll; display: flex; flex-direction: column;}
@media (max-width: 1200px) {
     .posts{justify-content: inherit;}
}
</style>