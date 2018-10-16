<template>
    <section class="container">
        <h3>Counter: {{ count }}</h3>
        <button @click="decrease">-</button>
        <button @click="increase">+</button>
    </section>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: mapState(['count']),
        methods: mapMutations(['increase', 'decrease'])
        // methods: {
        //     increase() {
        //         //this.$store.state.count++;
        //         this.$store.commit('increase');
        //     },
        //     decrease() {
        //         //this.$store.state.count--;
        //         this.$store.commit('decrease');
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