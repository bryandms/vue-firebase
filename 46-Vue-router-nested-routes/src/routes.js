import Home from './components/Home'
import User from './components/User'
import UserProfile from './components/UserProfile'

export const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User, children: [
        { path: 'profile', component: UserProfile }
    ]}
]