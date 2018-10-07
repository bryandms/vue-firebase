Vue.component('home', {
    template: `
        <div>
            <h1>Home</h1>
            <h3>Home content</h3>
        </div>
    `
});

Vue.component('bio', {
    template: `
        <div>
            <h1>Bio</h1>
            <h3>Bio content</h3>
        </div>
    `
});

Vue.component('contact', {
    template: `
        <div>
            <h1>Contact</h1>
            <h3>Contact content</h3>
        </div>
    `
});

new Vue({
    el: 'main',
    data: {
        selected: 'home'
    }
});