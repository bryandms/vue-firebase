<template>
    <div class="container">
        <h4>Objects inside of the backpack</h4>
        <ul>
            <li v-for="(object, index) in objectsInside" :key="index">
                <a href="#" @click="toggleAdded(object)">-</a>
                <span v-text="object.name"></span>
            </li>
        </ul>

        <h4>Objects out of the backpack</h4>
        <ul>
            <li v-for="(object, index) in objectsOut" :key="index">
                <a href="#" @click="toggleAdded(object)">+</a>
                <span v-text="object.name"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                objects: [
                    { name: 'book', added: false },
                    { name: 'charger', added: true },
                    { name: 'eraser', added: false },
                    { name: 'laptop', added: true },
                    { name: 'mechanical pencil', added: false },
                    { name: 'umbrella', added: true }
                ]
            }
        },
        methods: {
            toggleAdded(object) {
                object.added = !object.added;
            }
        },
        computed: {
            objectsInside() {
                return this.objects.filter((object) => object.added);
            },
            objectsOut() {
                return this.objects.filter((object) => !object.added);
            }
        }
    }
</script>

<style>
    * {
        font-weight: 100;
    }
    .container {
        padding: 2em;
    }
    li {
        list-style: none;
        border-top: 1px solid darkgray;
        padding-top: 1em;
        max-width: 500px;
        overflow: hidden;
    }
    li a {
        text-decoration: none;
        color: darkgray;
        border-radius: 50%;
        border: 1px solid darkgray;
        display: inline-block;
        width: 20px;
        height: 20px;
        text-align: center;
        margin-bottom: 1em;
    }
</style>