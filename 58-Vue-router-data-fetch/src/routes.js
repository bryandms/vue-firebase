import Home from './components/Home.vue'
import User from './components/User.vue'

export const routes = [
    { path: '/', component: Home, name:'home' },
    { path: '/user/:id', component: User, name: 'user' }
]
