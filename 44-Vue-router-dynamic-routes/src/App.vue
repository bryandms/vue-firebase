<template>
    <section>
        <router-link to="/" active-class="active" tag="li" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/user/1" active-class="active" tag="li">
            <a>User</a>
        </router-link>
        <router-link to="/contact" active-class="active" tag="li">
            <a>Contact</a>
        </router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>

<style>
    .active a {
        color: lightseagreen;
    }
</style>
