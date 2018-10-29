<template>
    <section>
        <h1>User with ID: {{ $route.params.id }}</h1>
        <h2 v-text="username"></h2>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                username: null
            }
        },
        created() {
            this.generateUsername();
        },
        watch: {
          '$route': 'generateUsername'
        },
        methods: {
            generateUsername() {
                setTimeout(() => {
                    this.username = this.$route.params.id + Math.floor(Math.random() * 1000)
                }, 2000)
            }
        }
    }
</script>
