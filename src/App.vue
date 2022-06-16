<template>
  <div class="app">
      <div class="sidebarr">
           <sidebar/>
      </div>
      <div class="router">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar.vue'
export default {
   components : {sidebar}
}
</script>

<style scoped >
.app{
  width: 100%;
  height: 100vh;
  display: flex;
}
.sidebarr{width: 400px;}
.router{width: 80%; height: 100vh;}
@media (max-width: 1000px) {
    .app{flex-direction: column;}
    .sidebarr{width: 100%;}
    .router{width: 100%;}
}
</style>