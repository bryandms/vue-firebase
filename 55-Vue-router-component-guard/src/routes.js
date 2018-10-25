import Home from './components/Home.vue';
import Team from './components/Team.vue';
import User from './components/User.vue';
import UserPhotos from './components/UserPhotos.vue'
import UserBio from './components/UserBio.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import { store } from './store'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/test', alias: '/test1', redirect: { name: 'home' },  component: Home },
    { path: '/team/:id', component: Team, children: [
        { path: '', components: {
            default: User,
            bio: UserBio,
            photos: UserPhotos
        }, name:'team'}
    ]},
    {
        beforeEnter: ((to, from, next) => {
            console.log('Access to contact')
            next(store.state.auth)
        }),
        path: '/contact', component: Contact, name: 'contact', props: { newsletter: false }
    },
    { path: '*', component: NotFound }
]