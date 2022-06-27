import { createStore } from 'vuex'
import Profile from './module/profile'
import Users from './module/users'
import Projects from './module/projects'
import Posts from './module/posts'
import Meets from './module/meets'
import FavoritesProjects from './favorites/favoritesProjects'
import FavoritesPosts from './favorites/favoritesPosts'
import FavoritesMeets from './favorites/favoritesMeets'
export default createStore({
    modules: {
      Profile : Profile ,
      Users : Users ,
      Projects : Projects , 
      Posts : Posts ,
      Meets : Meets ,
      FavoritesProjects : FavoritesProjects ,
      FavoritesPosts : FavoritesPosts , 
      FavoritesMeets : FavoritesMeets , 
    }
})
