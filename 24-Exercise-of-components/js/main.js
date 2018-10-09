Vue.component('users', {
    props: ['list'],
    template: '#users-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=50')
            .then((res) => {
                const list = res.data.results.map((user) => {
                    return {
                        name: `${user.name.title}  ${user.name.first} ${user.name.last}`,
                        email: user.email,
                        photo: user.picture.medium
                    };
                });
                this.users = list;
            });
    },
    data() {
        return {
            users: [],
            search: ''
        }
    },
    computed: {
        filterUsers() {
            return this.users.filter((user) => {
                return user.name.includes(this.search);
            });
        }
    }
});

Vue.component('user', {
    props: ['data'],
    template: '#user-template'
});

new Vue({
    el: 'main'
});