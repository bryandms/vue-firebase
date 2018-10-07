Vue.component('alert', {
    props: ['type', 'position'],
    template: `
            <section class="alert" :class="[type, position]">
                <header class="alert-header">
                    <a href="#" @click="hideAlert">X</a>
                    <slot name="header">Default Header</slot>
                </header>
                <div class="alert-content">
                    <slot>
                        Default Content
                    </slot>
                </div>
                <footer class="alert-footer">
                    <slot name="footer">Default Footer</slot>
                </footer>
            </section>`,
    methods: {
        hideAlert() {
            this.$emit('hide');
        }
    }
});

new Vue({
    el: 'main',
    data: {
        showWarning: false,
        showSuccess: false,
        showDanger: false,
    }
});