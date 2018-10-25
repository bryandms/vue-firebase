import Home from './components/Home.vue'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import { store } from './store'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    {
        beforeEnter: (to, from, next) => {
            console.log('Access contact')
            next(store.state.auth)
        },
        path: '/contact', component: Contact, name: 'contact'
    },
    { path: '*', component: NotFound }
]