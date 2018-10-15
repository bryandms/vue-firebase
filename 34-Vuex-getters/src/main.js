import Vue from 'vue'
import Todo from './Todo.vue'
import { store } from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(Todo)
})
