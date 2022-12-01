<template>
    <div class="item">
        <div v-if="(post.urlToImage !== '' && post.urlToImage !== null)" class="item__img img" :class="classObject.itemImg">
            <img class="img__img" :src="post.urlToImage" alt="News photo">
        </div>
        <div class="item__content content" :class="classObject.itemContent">
            <div class="content__date" :class="classObject.contentDate">{{ post.publishedAt }}</div>
            <div class="content__text" :class="classObject.contentText">
                <div class="content__title" :class="classObject.title">{{ post.title }}</div>
                <div class="content__description" :class="classObject.description">{{ post.description }}</div>
            </div>
        </div>
      <div class="item__icon" :class="classObject.icon">
        <slot name="item-icon"></slot>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => { }
        },
        classObject: {
            type: Object,
            default: () => { }    
        }

    }
}
</script>

<style lang="scss" scoped>
.item {
    @include dflex(space-between, center);
    border: 10px $colorblack solid;
    position: relative;
    padding: 10px;

    &:nth-child(even) {
        background-color: $colordarkblue;
        color: $colorwhite;
    }

    &:nth-child(odd) {
        background-color: $colorwhite;
        color: $colordarkblue;
    }

    &:not(:first-child) {
        flex-direction: column;
    }

    .content__date {
        font-weight: 700;
        font-size: 2rem;
        transform: rotate(-90deg);
    }


}

.img {
    max-width: 300px;
    height: 100%;
    //position: relative;


    .img__img {
        // position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.item__content {
    @include dflex(space-between, center);
}

.content__title {
    padding: 15px;
}

.item__icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 4em;
    height: 4em;
    background-color: $colorgrey;
    color: $colorwhite;
    opacity: 0.25;
    text-align: center; 
}
</style>