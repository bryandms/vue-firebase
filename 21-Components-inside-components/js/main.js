Vue.component('fruits-list', {
    props: ['fruits'],
    template: `
        <div>
            <h1>
                <slot></slot>
            </h1>
            <ul>
                <fruit v-for="cFruit in fruits" :fruit="cFruit"></fruit>
            </ul>
        </div>
    `,
});

Vue.component('fruit', {
    props: ['fruit'],
    template: `
        <li>
            {{ fruit }}
        </li>
    `
});

new Vue({
    el: 'main',
    data: {
        fruits: [
            'Pineapple',
            'Grape',
            'Strawberry',
            'Watermelon',
            'Pear',
            'Apple'
        ]
    }
});
