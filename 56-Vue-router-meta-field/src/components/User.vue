<template>
    <section>
        <h1>ID: {{ $route.params.id }}</h1>
        <h2>Peter</h2>
    </section>
</template>

<script>
    export default {
        beforeRouteEnter: ((to, from, next) => {
            console.info('Before entering')
            next((vm) => console.log(vm))
        }),
        beforeRouteUpdate: ((to, from, next) => {
           console.info('Before changing the route on the same component')
           next()
        }),
        beforeRouteLeave: ((to, from, next) => {
           console.info('Before leaving')
           next()
        })
    }
</script>
