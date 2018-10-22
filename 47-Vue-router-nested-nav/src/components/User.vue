<template>
    <section>
        <h1>ID: {{ $route.params.id }}</h1>
        <h2>Peter Sandoval</h2>
        <router-link :to="'/team/' + $route.params.id + '/photos'">Photos</router-link>
        <router-link :to="'/team/' + $route.params.id + '/bio'">Bio</router-link>
        <router-view></router-view>
    </section>
</template>