<template>
    <div>
        <p :class="$style.red">This should be red</p>
        <p :class="$style.bold">This should be bold</p>
        <p :class="[$style.red, $style.bold]">This should be red and bold</p>
        <p :class="{ [$style.red]: isRed }">Am I red?</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isRed: false
            }
        }
    };
</script>

<style module>
    .red {
        color: red;
    }
    .bold {
        font-weight: bold;
    }
</style>
