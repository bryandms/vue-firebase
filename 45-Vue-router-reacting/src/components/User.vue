<template>
    <h3>User {{ id }}</h3>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to) {
                this.id = to.params.id
            }
        }
    }
</script>
