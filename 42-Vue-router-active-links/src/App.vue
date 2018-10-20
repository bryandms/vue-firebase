<template>
    <section>
        <router-link to="/" active-class="active" tag="li" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/contact" active-class="active" tag="li">
            <a>Contact</a>
        </router-link>
        <router-view></router-view>
    </section>
</template>

<style>
    .active a {
        color: lightseagreen;
    }
</style>
