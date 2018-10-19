const state = {
    products: [
        { name: 'Lenovo Yoga 920', price: 1329.99 },
        { name: 'OnePlus 6 Mirror Black', price: 529 },
        { name: 'Slimbook Katana II', price: 699 }
    ]
}

const mutations = {
    storeProduct: (state, product) => state.products.unshift(product)
}

export default {
    namespaced: true,
    state,
    mutations
}