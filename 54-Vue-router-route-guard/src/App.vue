<template>
    <main>
        <button @click="changeAuth">Change Auth</button>
        <hr>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
        <router-view></router-view>
    </main>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: mapMutations(['changeAuth'])
    }
</script>
