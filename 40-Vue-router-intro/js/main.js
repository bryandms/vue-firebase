const home = Vue.component('Home', {
    template: '<h3>Home Page</h3>'
})

const contact = Vue.component('Contact', {
    template: '<h3>Contact Page</h3>'
})

const routes = [
    { path:'/', component: home },
    { path:'/contact', component: contact }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    el: 'main'
})