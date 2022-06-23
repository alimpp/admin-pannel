
const Projects = {
    namespaced : true ,             
    state : {
        projects : [
            {
                id : 1 , 
                name : "Front End" ,
                createTime : "2021/4/12" ,  
                createBy  : "jhonDoe@gmail.com" ,
            } ,
            {
                id : 2 , 
                name : "Back End" ,
                createTime : "2022/1/30" ,  
                createBy  : "marci@gmail.com" ,
            } ,
            {
                id : 3 , 
                name : "Design Product" ,
                createTime : "2020/12/30" ,  
                createBy  :  "phil@gmail.com" ,
            } ,
            {
                id : 4 , 
                name : "Digital Marketing" ,
                createTime : "2021/10/25" ,  
                createBy  : "estephane@gmail.com" ,
            } ,
            {
                id : 5 , 
                name : "Dev ops Service" ,
                createTime : "2022/5/20" ,  
                createBy  : "dani@gmail.com" ,
            } ,
        ]
    } , 
    getters : {
        getProject(state){
            return state.projects
        }
    } ,
    mutations : {} , 
    actions : {}  , 
    modules: {} , 
}

export default Projects 