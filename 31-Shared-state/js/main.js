const shared = {
    user: {
        name: 'Bryan Morales',
    }
};

new Vue({
    el: '#app1',
    data: shared
});

new Vue({
    el: '#app2',
    data: shared
});
