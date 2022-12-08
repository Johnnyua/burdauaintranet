<template>
    <div>
        <img :src="item.urlToImage" alt="No photo">
    </div>
</template>

<script>
export default {
    name: 'vCarouselItem',
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>