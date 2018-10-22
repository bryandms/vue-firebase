<template>
    <section>
        <h1>ID: {{ $route.params.id }}</h1>
        <h2>Peter Sandoval</h2>
        <router-link :to="{ name:'photos', params: { id: $route.params.id } }">Photos</router-link>
        <router-link :to="{ name:'bio', params: { id: $route.params.id } }">Bio</router-link>
        <router-view></router-view>
    </section>
</template>