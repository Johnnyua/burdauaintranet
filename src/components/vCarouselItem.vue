<template>
    <div class="carousel__item">
        <div class="item__img">
            <img :src="item.urlToImage" alt="No photo">
        </div>

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
.item__img {
    height: 100%;
    width: 120px;
    position: relative;

    img {
        height: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
}
</style>