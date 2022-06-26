import Swal from 'sweetalert2'

function updateLocalStorage(favoritesPosts){
    localStorage.setItem('favoritesPosts' , JSON.stringify(favoritesPosts))
}

const FavoritesPosts = {
    namespaced : true ,             
    state : {
        favoritesPosts : localStorage.getItem('favoritesPosts') ? JSON.parse(localStorage.getItem('favoritesPosts')) : []
    } , 
    getters : {
        getFavoritesPosts(state){
            return state.favoritesPosts
        } , 
        badgeFavoritesPosts(state){
            return state.favoritesPosts.length
        }
    } ,
    mutations : {
        updateFavoritesPosts(state , post){
            state.favoritesPosts.push(post)
            updateLocalStorage(state.favoritesPosts)
        } , 
        // clearFavoritesPosts(state){
        //     localStorage.removeItem('favoritesProjects')
        //     Swal.fire({
        //         position: 'top',
        //         icon: 'warning',
        //         title: 'Favorites Cleared',
        //         showConfirmButton: false,
        //         timerProgressBar : true , 
        //         toast : true , 
        //         timer: 2000
        //     }) 
        //     return state.favoritesProjects = []
        // }
    } , 
    actions : {
        addPostToFavorites({commit} , post){
            commit('updateFavoritesPosts' , post)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Post Add To Favorites',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        }
    }  , 
}

export default FavoritesPosts