import Home from './components/Home'
import User from './components/User'
import Contact from './components/Contact'

export const routes = [
    { path: '/', component: Home },
    { path: '/user/:id', component: User },
    { path: '/contact', component: Contact }
]