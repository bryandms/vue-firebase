<template>
    <div>
        <node type="nav">Nav node</node>
        <node type="aside">Aside node</node>
        <node type="section">Section node</node>
        <node type="footer">Footer node</node>
    </div>
</template>

<script>
    import node from './components/Node.vue';
    export default {
        components: { node }
    }
</script>
