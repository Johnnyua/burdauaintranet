<template>
    <div class="carousel__item">
        <div class="item__img">
            <img :src="item.urlToImage" alt="No photo">
        </div>
        <div class="iem__name">{{item.name}}</div>
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
            flex-direction: column;
            margin-right: 20px;
            width: 100%;
            height: 100%;
            position: absolute;
    
            .item__img img {
                border-radius: 100px;
                width: 60%;
                height: 80%;
                object-fit: cover;
            }
        }
</style>