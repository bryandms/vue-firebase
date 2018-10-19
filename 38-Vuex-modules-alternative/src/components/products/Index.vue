<template>
    <section>
        <h1>Product list</h1>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                {{ product.name }} - ${{ product.price.toFixed(2) }}
                <button class="add" @click="add(product)">+</button>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        computed: mapState({
            products: state => state.products.products
        }),
        methods: {
            add(product) {
                this.$store.commit('cart/addProduct', product);
            }
        }
    }
</script>