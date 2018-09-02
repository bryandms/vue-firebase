const vm = new Vue({
    el: 'main',
    data: {
        people: []
    },
    mounted() {
        this.loadPeople();
    },
    methods: {
        loadPeople() {
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((res) => {
                    this.people = res.body.results;
                });
        }
    }
});