<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
    name: 'MyButton'    
    }
</script>

<style lang="scss">
.btn {
       background: none;
       border: none;
       cursor: pointer;
}
</style>