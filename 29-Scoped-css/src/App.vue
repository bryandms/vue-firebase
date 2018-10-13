<template>
    <div>
        <h3>List without styles</h3>
        <ul>
            <li>Read about scoped CSS</li>
            <li>Implement scoped CSS</li>
        </ul>
        <Backpack></Backpack>
    </div>
</template>

<script>
    import Backpack from './components/Backpack.vue';
    export default {
        components: { Backpack }
    }
</script>

<style>
</style>
