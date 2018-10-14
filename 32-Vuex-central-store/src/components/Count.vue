<template>
    <div class="container">
        <h1>Count: {{ count }}</h1>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increase() {
                // It should not be mutated in this way
                this.$store.state.count++;      
            },
            decrease() {
                // It should not be mutated in this way
                this.$store.state.count--;      
            }
        },
        computed: {
            count() {
                return this.$store.state.count;
            }
        }
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