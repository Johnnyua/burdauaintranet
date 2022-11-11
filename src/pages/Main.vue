<template>
    <main-comp class="main-container"></main-comp>
</template>

<script>
import MainComp from "@/components/global/MainComp.vue";
export default {
    components: { MainComp }
}
</script>

<style lang="scss" scoped>
.main-container {
    flex: 1 1 auto;
}
</style>