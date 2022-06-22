import { createStore } from 'vuex'
import Users from './module/users'
export default createStore({
    modules: {
      Users : Users , 
    }
})
