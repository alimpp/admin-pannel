<template>
<div class="favorites scrollbar">
   <favoritesDataComponent/>
</div>
</template>

<script>
import favoritesDataComponent from '../components/dataComponets/favoritesDataComponent.vue'
export default {
    components : {favoritesDataComponent}
}
</script>

<style scoped >
.favorites{height: 100vh; overflow: scroll; display: flex; flex-direction: column;}
@media (max-width: 1200px) {
     .favorites{justify-content: inherit;}
}
</style>