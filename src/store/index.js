import { createStore } from 'vuex'
import Users from './module/users'
import Projects from './module/projects'
import Posts from './module/posts'
import Meets from './module/meets'
import FavoritesProjects from './favorites/favoritesProjects'
import FavoritesPosts from './favorites/favoritesPosts'
import FavoritesMeets from './favorites/favoritesMeets'
import Swal from 'sweetalert2'
function updateLocalStorage(profile){
  localStorage.setItem('profile' , JSON.stringify(profile))
}
export default createStore({
    state : {
      profile : localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : []
    } ,
    mutations : {
      updateState(state , newData){
         state.profile = newData
        updateLocalStorage(state.profile)
      }
    } ,
    actions : {
      updateProfile({commit} , newData){
        commit('updateState' , newData)
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Profile Updated',
          showConfirmButton: false,
          timerProgressBar : true , 
          toast : true , 
          timer: 2000
      })
      }
    } ,
    modules: {
      Users : Users ,
      Projects : Projects , 
      Posts : Posts ,
      Meets : Meets ,
      FavoritesProjects : FavoritesProjects ,
      FavoritesPosts : FavoritesPosts , 
      FavoritesMeets : FavoritesMeets , 
    }
})
