<template>
    <p>Hi, I'm {{ name }} {{ lastname }} and I live in {{ country }}</p>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        // computed: {
        //     name() {
        //         return this.$store.state.name;
        //     }
        // }
        // computed: mapState({
        //     name: state => state.name,
        //     lastname: state => state.lastname
        // })
        computed: mapState(['name', 'lastname', 'country'])
    }
</script>

<style>
</style>
