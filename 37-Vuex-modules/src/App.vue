<template>
    <section class="container">
        <new-product-form class="new-product"></new-product-form>
        <products class="list"></products>
        <cart class="cart"></cart>
    </section>
</template>

<script>
    import NewProductForm from './components/products/Create.vue';
    import Products from './components/products/Index.vue';
    import Cart from './components/Cart.vue';

    export default {
        components: {
            Products,
            Cart,
            NewProductForm
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body, html {
        height: 100%;
        color: #444;
        background-color: #ffcc5c;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        font-weight: 100;
    }

    .container {
        text-align: center;
        width: 100%;
        height: auto;
    }

    input {
        padding: 0.25rem .5rem;
        border: 1px solid #F1F1F1;
        border-radius: 0.5em;
        box-sizing: border-box;
        height: 2rem;
        background-color: #fff;
    }

    input:focus {
        box-shadow: 0 0 0.3125rem #88d8b0;
        border: 1px solid #88d8b0;
    }

    button {
        cursor: pointer;
        border: none;
        border-radius: 50%;
        font-size: 1em;
        padding: .1em 0.5em;
        align-content: center;
        background-color: transparent;
    }

    .add {
        border: 1px solid #88d8b0;
        color: #88d8b0;
    }

    .remove {
        border: 1px solid #ff6f69;
        color: #ff6f69;
    }

    .new-product {
        background-color: #ffeead;
        padding: 2em;
        color: #ff6f69;
    }

    .list {
        background-color: #fff;
        padding: 4em 2em;
        border: 1px solid #ff6f69;
        border-left: none;
        border-right: none;
    }

    .cart {
        background-color: #fff;
        padding: 2em;
        background-image: linear-gradient(#ffeead, #ffcc5c);
    }

    .cart > h1 {
        color: #ff6f69;
    }
    
    li {
        margin-bottom: .35em;
    }
</style>
