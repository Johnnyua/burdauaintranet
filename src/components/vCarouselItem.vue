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
        },
        currentItemIndex: {
            type: Number,
            default: 0
        }, 
        index: {
            type: Number,
            default: 0    
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel__item {
    @include dflex(center, center);
    flex-direction: column;
    flex: 1 0 auto;
    margin-right: 20px;
    width: 100px;
    max-height: 180px;
    height: 100%;
    position: relative;

    &.active {
        width: 120px;
        max-height: 225px;
    }
}
.item__img {
    width: 100%;
    height: 100%;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        left: 0;
        top: 0;
        border-radius: 110px;
        box-sizing: border-box;
        box-shadow: 0 10px 20px #00000080, 0 -1px #ffffff80;
    }
}
</style>