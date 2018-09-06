Vue.component('users', {
    template: `<ul><li v-for="user in users">{{ user.name }}</li></ul>`,
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                this.users = res.data;
            });
    },
    data() {
        return {
            users: []
        }
    }
});

Vue.component('my-tasks', {
    props: ['tasks'],
    template: `<ul><li v-for="task in tasks">{{ task.title }}</li></ul>`
});

const vm = new Vue({
    el: 'main',
    data: {
        ajaxTasks: [],
        localTasks: [
            {
                title: "Task 1",
                completed: true
            },
            {
                title: "Task 2",
                completed: true
            },
            {
                title: "Task 3",
                completed: false
            },
        ]
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                this.ajaxTasks = res.data;
            });
    }
});