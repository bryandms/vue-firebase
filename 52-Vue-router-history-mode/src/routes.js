import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '*', component: NotFound }
]