<template>
    <section>
        <h1>Home</h1>
        <router-link :to="{ name: 'team', params: { id: id } }">Team</router-link>
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
