<template>
    <div class="item">
        <div class="item__img"></div>
        <div class="item__text">
            <div class="item__text date"></div>
            <div class="item__text title"></div>
            <div class="item__text description"></div>
            <div class="item__text open"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    border: 1px #000 solid;
}
</style>