import { createStore } from 'vuex'
import Users from './module/users'
import Projects from './module/projects'
export default createStore({
    modules: {
      Users : Users ,
      Projects : Projects , 
    }
})
