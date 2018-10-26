<template>
    <section>
        <h5>{{ newsletter }}</h5>
        <template v-if="newsletter">
            <h3>Newsletter</h3>
            <label for="email">Email</label>
            <input type="email" placeholder="Email" id="email">
        </template>
    </section>
</template>

<script>
    export default {
        props: ['newsletter']
    }
</script>
