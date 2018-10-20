<template>
    <section>
        <h3>Contact</h3>
        <p>If you do not press the button you will be redirected in 5 seconds</p>
        <button @click="goHome()">Go Home</button>
    </section>
</template>

<script>
    export default {
        created() {
            setTimeout(() => this.$router.push('/'), 5000)
        },
        methods: {
            goHome() {
                this.$router.push('/', () => console.log('onComplete'))
            }
        }
    }
</script>