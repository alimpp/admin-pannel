import { createStore } from 'vuex'
import Users from './module/users'
import Projects from './module/projects'
import FavoritesProjects from './favorites/favoritesProjects'
export default createStore({
    modules: {
      Users : Users ,
      Projects : Projects , 
      FavoritesProjects : FavoritesProjects ,
    }
})
