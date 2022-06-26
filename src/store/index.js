import { createStore } from 'vuex'
import Profile from './module/profile'
import Users from './module/users'
import Projects from './module/projects'
import Posts from './module/posts'
import FavoritesProjects from './favorites/favoritesProjects'
import FavoritesPosts from './favorites/favoritesPosts'
export default createStore({
    modules: {
      Profile : Profile ,
      Users : Users ,
      Projects : Projects , 
      Posts : Posts ,
      FavoritesProjects : FavoritesProjects ,
      FavoritesPosts : FavoritesPosts ,
    }
})
