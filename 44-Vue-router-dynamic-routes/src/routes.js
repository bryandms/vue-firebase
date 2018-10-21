import Home from './components/Home'
import Contact from './components/Contact'
import User from './components/User'

export const routes = [
    { path: '/', component: Home },
    { path: '/user/:id', component: User },
    { path: '/contact', component: Contact }
]