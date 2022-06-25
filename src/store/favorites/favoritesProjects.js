import Swal from 'sweetalert2'

function updateLocalStorage(favoritesProjects){
    localStorage.setItem('favoritesProjects' , JSON.stringify(favoritesProjects))
}

const FavoritesProjects = {
    namespaced : true ,             
    state : {
        favoritesProjects : localStorage.getItem('favoritesProjects') ? JSON.parse(localStorage.getItem('favoritesProjects')) : []
    } , 
    getters : {
        getFavoritesProjects(state){
            return state.favoritesProjects
        } ,
        badgeFavoritesProjects(state){
            return state.favoritesProjects.length
        }
    } ,
    mutations : {
        updateFavoritesProjects(state , project){
            state.favoritesProjects.push(project)
            updateLocalStorage(state.favoritesProjects)
        }
    } , 
    actions : {
        addToFavoritesProjects({commit} , project){
            commit('updateFavoritesProjects' , project)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Project Add To Favorites',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 1000
            })
        }
    }  , 
    modules: {} , 
}

export default FavoritesProjects 