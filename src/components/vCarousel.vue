<template>
    <div>
        <v-carousel-item
        class="carousel__item" 
        v-for="item in items"
        :key="item.id"/>
    </div>
   </template>

<script>
export default {
    name: 'vCarousel',
    props: {
        carouselItems: {
            title: {
                type: String,
                default: ''
            },
            items: {
                type: Array,
                default: () => []
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>