<template>
    <div class="carousel__item">
        <div class="item__img">
            <img :src="item.urlToImage" alt="No photo">
        </div>
        <div class="iem__name">{{ item.name }}</div>
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
    @include dflex(center, flex-start);
    flex-direction: column;
    flex: 1 0 20%;
    margin-right: 5px;

    .item__img {
        height: 70%;
    img {
        max-height: 225px;
        height: 100%;
        border-radius: 100px;
    }
        }
}
</style>