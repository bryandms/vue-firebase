new Vue({
    el: 'main',
    data: {
        tasks: [
            { title: 'Task 1', done: false},
            { title: 'Task 2', done: false},
            { title: 'Task 3', done: false}
        ]
    },
    methods: {
        toggleDone(task) {
            task.done = !task.done;
        }
    },
    computed: {
        count() {
            return this.tasks.filter((task) => task.done);
        }
    }
});