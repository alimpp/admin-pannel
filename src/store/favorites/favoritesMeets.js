import Swal from 'sweetalert2'

function updateLocalStorage(favoritesMeets){
    localStorage.setItem('favoritesMeets' , JSON.stringify(favoritesMeets))
}

const FavoritesMeets = {
    namespaced : true , 
    state : {
        favoritesMeets : localStorage.getItem('favoritesMeets') ? JSON.parse(localStorage.getItem('favoritesMeets')) : []
    } , 
    getters : {
        getFavoritesMeets(state){
            return state.favoritesMeets
        } , 
        badgeFavoritesMeets(state){
            return state.favoritesMeets.length
        }
    } ,
    mutations : {
        updateFavoritesMeets(state , meet){
            state.favoritesMeets.push(meet)
            updateLocalStorage(state.favoritesMeets)
        } , 
        clearFavoritesMeets(state){
            localStorage.removeItem('favoritesMeets')
            Swal.fire({
                position: 'top',
                icon: 'warning',
                title: 'Favorites Cleared',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            }) 
            return state.favoritesMeets = []
        }
    } , 
    actions : {
        addToFavoritesMeets({commit} , meet){
            commit('updateFavoritesMeets' , meet)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Meet Add To Favorites',
                showConfirmButton: false,
                timerProgressBar : true , 
                toast : true , 
                timer: 2000
            })
        }
    } ,
}

export default FavoritesMeets