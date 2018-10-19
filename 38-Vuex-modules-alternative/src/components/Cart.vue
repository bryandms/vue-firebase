<template>
    <section>
        <h1>Cart</h1>
        <h3>Total: ${{ total.toFixed(2) }}</h3>
        <ul>
            <li v-for="(product, index) in cart" :key="index">
                {{ product.name }}
                <button class="remove" @click="remove(product)">x</button>
            </li>
        </ul>
    </section>
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';

    export default {
        computed: {
            ...mapState({
                cart: state => state.cart.cart
            }),
            ...mapGetters('cart', {
                total: 'total'
            })
        },
        methods: {
            remove(product) {
                this.$store.commit('cart/removeProduct', product)
            }
        }
    }
</script>