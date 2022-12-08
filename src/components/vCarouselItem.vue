<template>
    <div class="carousel__item">
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
.carousel__item {
            @include dflex(center, center);
            margin-right: 20px;
            width: 100%;
            height: 100%;
            position: absolute;
    
            img {
                border-radius: 100px;
                width: 60%;
                height: 80%;
                object-fit: cover;
            }
        }
</style>