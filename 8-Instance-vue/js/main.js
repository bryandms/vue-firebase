const vm1 = new Vue({
    el: 'main',
    data: {
        message: 'Instance 1'
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        },
        reverse2() {
            vm2.message = vm2.message.split('').reverse().join('');
        }
    },
    beforeUpdate() {
        console.log('BeforeUpdate: ', this.message);
    },
    updated() {
        console.log('Updated: ', this.message);
    },
});

const vm2 = new Vue({
    el: '#app',
    data: {
        message: 'Instance 2'
    }
});