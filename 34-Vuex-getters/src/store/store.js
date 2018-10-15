import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [
            { title: 'Learn more about Vuex', done: true },
            { title: 'Read about Vuex getters', done: true },
            { title: 'Create a simple TODOs listing application', done: false },
            { title: 'Implement the Vuex getters', done: false },
            { title: 'Upload last lesson of the Vuex getters', done: false },
            { title: 'Keep learning about Vuex', done: false }
        ]
    },
    getters: {
        doneTodosCount: state => {
            return state.todos.filter(todo => todo.done).length;
        }
    }
});