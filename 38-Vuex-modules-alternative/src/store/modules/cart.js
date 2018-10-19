const state = {
    cart: []
}

const getters = {
    total: (state) => state.cart.reduce((total, product) => total + product.price, 0)
}

const mutations = {
    addProduct: (state, product) => state.cart.unshift(product),
    removeProduct: (state, product) => state.cart.splice(product, 1)
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}