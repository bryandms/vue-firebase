Vue.component('author', {
    props: ['name', 'age'],
    template: `<h3>{{ name }}</h3>`,
    mounted() {
        console.log(typeof this.age);
    },
    // The props should not be changed within the
    // components because they affect the father.
});

new Vue({
    el: 'main',
    data: {
        author: 'Bryan Morales'
    }
}); 