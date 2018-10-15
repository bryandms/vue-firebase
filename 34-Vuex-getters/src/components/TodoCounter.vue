<template>
    <h3>{{ doneTodosCount }} completed.</h3>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters(['doneTodosCount'])
    }
</script>
