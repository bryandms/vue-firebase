const vm = new Vue({
    el: 'main',
    data: {
        newTask: null,
        tasks: [
            'Learn Vue.js',
            'Learn ES6',
            'Enjoy coding'
        ]
    },
    methods: {
        addTask() {
            this.tasks.unshift(this.newTask);
            this.newTask = null;
        }
    }
});

// Vanilla JavaScript
// function addTask() {
//     const input = document.querySelector('input[type=text]');
//     vm.tasks.unshift(input.value);
//     input.value = '';
// }