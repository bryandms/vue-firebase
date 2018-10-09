Vue.component('username-input', {
    props: ['username'],
    template: `
        <div>
            <input :value="username" @input="checkUsername($event.target.value)" ref="pass">
            <small ref="message">Available</small>
        </div>
    `,
    methods: {
        checkUsername(username) {
            if (this.storage.includes(username)) {
                this.$refs.message.innerText = 'In use';
                this.$refs.pass.style.borderColor = 'red';
            } else {
                this.$refs.message.innerText = 'Available';
                this.$refs.pass.style.borderColor = 'green';
            }
            if (!username) {
                this.$refs.message.innerText = 'Invalid';
                this.$refs.pass.style.borderColor = 'red';
            }
            this.$emit('input', username);
        }
    },
    data() {
        return {
            storage: ['admin', 'root']
        }
    }
});

new Vue({
    el: 'main',
    data: {
        username: 'Tesla'
    }
});