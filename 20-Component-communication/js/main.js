const eventBus = new Vue();

Vue.component('product-list', {
    props: ['products'],
    template: `
        <section>
            <ul>
                <li v-for="product in products">
                    {{ product.name }} -
                    <small>$ {{ product.price.toFixed(2) }}</small>
                    <button @click="removeProduct(product.price)">-</button>
                    <button @click="addProduct(product.price)">+</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        removeProduct(price) {
            eventBus.$emit('remove', price);
        },
        addProduct(price) {
            eventBus.$emit('add', price);
        }
    }
});

Vue.component('shopping-cart', {
    template: `
        <section>
            <h1>$ {{ total.toFixed(2) }}</h1>
            <h3>{{ quantityProducts }} products</h3>
        </section>
    `,
    data() {
        return {
            total: 0,
            quantityProducts: 0
        }
    },
    created() {
        eventBus.$on('remove', (price) => {
            if (this.total > 0) {
                this.total -= price;
                this.quantityProducts--;
            }
        });
        eventBus.$on('add', (price) => {
            if (this.total >= 0) {
                this.total += price;
                this.quantityProducts++;
            }
        });
    }
});

new Vue({
    el: 'main',
    data: {
        products: [
            { name: 'Three milks', price: 1 },
            { name: 'Pie', price: 1 },
            { name: 'Crab', price: 1 },
            { name: 'Enchilada', price: 1 },
            { name: 'Chocolate cake', price: 1 }
        ]
    }
});