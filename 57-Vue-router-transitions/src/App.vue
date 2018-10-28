<template>
    <transition name="fade" appear>
        <router-view></router-view>
    </transition>
</template>

<style>
    /* Transition */
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s;
    }
</style>