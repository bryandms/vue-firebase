<template>
    <section>
        <h1>Home</h1>
        <router-link :to="'/team/' + id">Team</router-link>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                id: 'peter'
            }
        }
    }
</script>