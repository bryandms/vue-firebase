export const mutations = {
    storeProduct: (state, product) => state.products.unshift(product),

    addProduct: (state, index) => state.cart.unshift(state.products[index]),

    removeProduct: (state, index) => state.cart.splice(index, 1)
}