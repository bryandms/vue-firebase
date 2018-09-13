Vue.component('alert', {
    props: ['type', 'position'],
    template: `
            <section class="alert" :class="[type, position]">
                <header class="alert-header">
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
});

new Vue({
    el: 'main',
});