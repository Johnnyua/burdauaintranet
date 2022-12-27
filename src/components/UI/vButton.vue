<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
    name: 'vButton'    
    }
</script>

<style lang="scss">
.btn {
       background: none;
       border: none;
       cursor: pointer;
}
</style>