import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cart: []
    },
    getters: {
        total: (state) => state.cart.reduce((total, product) => total + product.price, 0)
    },
    mutations: {
        addProduct: (state, index) => state.cart.unshift(state.products[index]),
        removeProduct: (state, index) => state.cart.splice(index, 1)
    },
    modules: {
        products
    }
});
