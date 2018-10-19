<template>
    <section>
        <h1>Cart</h1>
        <h3>Total: ${{ total.toFixed(2) }}</h3>
        <ul>
            <li v-for="(product, index) in cart" :key="index">
                {{ product.name }}
                <button class="remove" @click="removeProduct(index)">x</button>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {
        computed: {
            ...mapState(['cart']),
            ...mapGetters(['total'])
        },
        methods: mapMutations(['removeProduct'])
    }
</script>
