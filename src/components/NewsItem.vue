<template>
 <article class="item" :class="classObject.item">
        <div v-if="(post.urlToImage !== '' && post.urlToImage !== null)" class="item__img" :class="classObject.itemImg">
            <img :src="post.urlToImage" alt="News photo">
        </div>
        <div class="item__content content" :class="classObject.itemContent">
            <div class="content__date" :class="classObject.itemDate">{{ post.publishedAt }}</div>
            <div class="content__text" :class="classObject.itemText">
                <div class="content__title" 
                    :class="classObject.itemTitle" 
                    @click="$emit('openPost', post)"
                >{{ post.title }}
                </div>
                <div class="content__description" :class="classObject.itemDescription">{{ post.description }}</div>
            </div>
        </div>
      <div 
        class="item__icon" 
        :class="classObject.itemIcon"
        >
        <slot name="item-icon"></slot>
      </div>
    </article>
</template>

<script>
export default {
    name: 'NewsItem',
    emits: ['openPost'],
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
    height: 100%;
    width: 100%;
 }
.content__title {
    padding: 15px;
}

</style>