<template>
    <main>
        <todo-counter></todo-counter>
        <ul>
            <li v-for="(todo, index) in todos" :key="index">{{ todo.title }}</li>
        </ul>
    </main>
</template>

<script>
    import TodoCounter from './components/TodoCounter.vue';
    import { mapState } from 'vuex';

    export default {
        components: {
            TodoCounter
        },
        computed: mapState(['todos'])
    }
</script>
