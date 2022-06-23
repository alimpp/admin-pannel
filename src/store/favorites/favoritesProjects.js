
const FavoritesProjects = {
    namespaced : true ,             
    state : {
        favoritesProjects : []
    } , 
    getters : {
        getFavoritesProjects(state){
            return state.favoritesProjects
        }
    } ,
    mutations : {
        updateFavoritesProjects(state , project){
            state.favoritesProjects.push(project)
        }
    } , 
    actions : {
        addToFavoritesProjects({commit} , project){
            commit('updateFavoritesProjects' , project)
        }
    }  , 
    modules: {} , 
}

export default FavoritesProjects 