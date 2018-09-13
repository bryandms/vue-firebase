Vue.component('my-tasks', {
    props: ['list'],
    template: '#my-tasks-template'
});

new Vue({
    el: 'main',
    data: {
        tasks: [
            { title: 'Read about slot.' },
            { title: 'Implement the slot.' },
            { title: 'Have fun learning and coding.' }
        ]
    }
});