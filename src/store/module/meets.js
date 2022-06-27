
const Meets = {
    namespaced : true , 
    state : {
        meets : [
            {
                id : 1 ,
                name : "for scrum" , 
                time : "12:00 2022/3/4" 
            } , 
            {
                id : 2 ,
                name : "back end meets" , 
                time : "12:00 2022/3/4" 
            } , 
            {
                id : 3 , 
                name : "for report users" , 
                time : "12:00 2022/3/4" 
            } , 
            {
                id : 4 ,
                name : "design meets" , 
                time : "12:00 2022/3/4" 
            } , 
            {
                id : 5 ,
                name : "products meets" , 
                time : "12:00 2022/3/4" 
            }
        ]
    } , 
    getters : {
        getMeets(state){
            return state.meets 
        }
    } , 
    mutations : {} , 
    actions :{} ,
}

export default Meets 