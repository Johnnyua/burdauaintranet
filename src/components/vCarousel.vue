<template>
    <v-carousel-item class="carousel__item" v-for="item in carouselItems" :key="item.id" :item="item" />
</template>

<script>
export default {
    name: 'vCarousel',
    props: {
        carouselItems: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel__item {
    @include dflex(center, center);
}
</style>