import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increase: (state, amount) => state.count += amount,
        decrease: (state, amount) => state.count -= amount
    },
    actions: {
        increaseAsync: (context, amount) => {
            setTimeout(() => context.commit('increase', amount), 2000);
        },
        decreaseAsync: ({ commit }, { amount }) => {
            setTimeout(() => commit('decrease', amount), 2000);
        },
    }
});
