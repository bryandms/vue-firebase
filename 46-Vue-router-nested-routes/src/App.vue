<template>
    <main>
        <router-link to="/" exact>
            <a>Home</a>
        </router-link>
        <router-link to="/user">
            <a>User</a>
        </router-link>
        <router-link to="/user/profile">
            <a>Profile</a>
        </router-link>
        <router-view></router-view>
    </main>
</template>
