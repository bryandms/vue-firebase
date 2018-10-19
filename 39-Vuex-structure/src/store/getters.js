export const getters = {
    total: (state) => state.cart.reduce((total, product) => total + product.price, 0)
}