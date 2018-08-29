const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hello World!',
        newTask: null,
        tasks: [
            'Learn Vue.js',
            'Learn ES6',
            'Enjoy coding'
        ],
        novels: [
            {
                title: 'Robinson Crusoe',
                author: 'Daniel Defoe',
                read: true,
                published: 1999
            },
            {
                title: 'Bajo la lluvia Dios no existe',
                author: 'Warren Ulloa',
                read: true,
                published: 2011
            },
            {
                title: 'Cocorí',
                author: 'Joaquín Gutiérrez Heras',
                read: false,
                published: 1947
            }
        ]
    },
    methods: {
        addTask() {
            this.tasks.unshift(this.newTask);
            this.newTask = null;
        }
    },
    computed: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        },
        readNovels() {
            return this.novels.filter((novel) => novel.read);
        },
        sortByPublication() {
            return this.novels.sort((a, b) => b.published - a.published);
        }
    }
});

// Vanilla JavaScript
// function addTask() {
//     const input = document.querySelector('input[type=text]');
//     vm.tasks.unshift(input.value);
//     input.value = '';
// }