import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import Profile from '../views/Profile'
import Posts from '../views/Posts'
import Meet from '../views/Meet'
import Favorites from '../views/Favorites'
import singleProject from '../components/singleComponent/singleProject'
import singlePost from '../components/singleComponent/singlePost'
import singleMeet from '../components/singleComponent/singleMeet'
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Projects/:id',
      name: 'singleProject',
      component: singleProject
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/Posts/:id',
      name: 'singlePost',
      component: singlePost
    },
    {
      path: '/Meet',
      name: 'Meet',
      component: Meet
    },
    {
      path: '/Meet/:id',
      name: 'singleMeet',
      component: singleMeet
    },
    {
      path: '/Favorites',
      name: 'Favorites',
      component: Favorites
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
