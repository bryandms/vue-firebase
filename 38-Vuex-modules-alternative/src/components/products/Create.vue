<template>
    <section>
        <h1>Add new product</h1>
        <form @submit.prevent="store">
            <input type="text" placeholder="Name" v-model="name" required>
            <input type="number" placeholder="Price" v-model="price" required>
            <input class="add" type="submit" value="Add">
        </form>
    </section>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        data() {
            return {
                name: '',
                price: 0
            }
        },
        methods: {
            store() {
                this.$store.commit('products/storeProduct', {
                    name: this.name,
                    price: Number(this.price)
                })

                this.name = '';
                this.price = 0;
            }
        }
    }
</script>