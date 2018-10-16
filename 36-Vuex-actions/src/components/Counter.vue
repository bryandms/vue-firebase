<template>
    <section class="container">
        <h3>Counter: {{ count }}</h3>
        <button @click="decreaseAsync({ amount: 5 })">-</button>
        <button @click="increaseAsync(10)">+</button>
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        computed: mapState(['count']),
        methods: mapActions(['increaseAsync', 'decreaseAsync']),
        // methods: {
        //     increaseAsync() {
        //         //this.$store.state.count++;
        //         //this.$store.commit('increase');
        //         //this.$store.dispatch('increaseAsync');
        //     },
        //     decreaseAsync() {
        //         //this.$store.state.count--;
        //         //this.$store.commit('decrease');
        //         //this.$store.dispatch('decreaseAsync');
        //     }
        // }
    }
</script>

<style>
    body {
        background-color: #222;
        color: #DDD;
    }
    button {
        border-radius: 50%;
        border: 1px solid #DDD;
        background: transparent;
        color: #DDD;
        width: 30px;
        height: 30px;
        margin: 0 1em;
    }
    .container {
        margin: 2em;
        border: 1px solid #DDD;
        padding: 2em;
        text-align: center;
    }
</style>