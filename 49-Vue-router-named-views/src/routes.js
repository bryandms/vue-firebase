import Home from './components/Home.vue';
import Team from './components/Team.vue';
import User from './components/User.vue';
import UserPhotos from './components/UserPhotos.vue';
import UserBio from './components/UserBio.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/team/:id', component: Team, children: [
        { path: '', components: {
            default: User,
            bio: UserBio,
            photos: UserPhotos
        }, name: 'team' }
    ]}
]
