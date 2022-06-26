
const Profile = {
    namespaced : true ,             
    state : {
        name : "Jhone Doe" , 
        emai : "jhonDoe2020@yahoo.com" , 
        country : "USA" , 
        phoneNumber : "+56 952 33 256" ,
    } , 
    getters : {
       getName(state){
        return state.name
       } , 
       getEmail(state){
        return state.email
       } , 
       getCountry(state){
        return state.country
       } , 
       getPhone(state){
        return state.phoneNumber
       }
    } ,
    mutations : {} , 
    actions : {}  , 
    modules: {} , 
}

export default Profile 