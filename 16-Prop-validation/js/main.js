Vue.component('people', {
    props: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            default: 'test@mail.com'
        },
        image: String,
        location: {
            type: [Object, String],
            default() {
                return {
                    country: 'Costa Rica'
                }
            }
        },
    },
    template: '#people-template'
});

new Vue({
    el: 'main',
    mounted() {
        axios.get('https://randomuser.me/api/?results=100')
            .then((res) => {
                this.people = res.data.results;
            });
    },
    data: {
        people: []
    }
});