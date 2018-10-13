<script>
    export default {
        props: ['type'],
        render(createElement) {
            return createElement(
                this.type,
                this.$slots.default
            )
        }
    };
</script>
