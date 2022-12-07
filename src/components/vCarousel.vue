<template>
    <div>
        <v-carousel-item 
            class="carousel__item" 
            v-for="item in carouselItems" 
            :key="item.id" />
    </div>
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

</style>