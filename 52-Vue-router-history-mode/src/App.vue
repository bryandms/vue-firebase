<template>
    <main>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'contact' }">contact</router-link>
        <router-view></router-view>
    </main>
</template>
