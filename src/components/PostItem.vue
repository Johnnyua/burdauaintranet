<template>
    <div class="item">
        <div class="item__img">
            <img :src="post.urlToImage" alt="">
        </div>
        <div class="date">{{post.publishedAt}}</div>
        <div class="text">
            <div class="text-title">{{post.title}}</div>
            <div class="text-description">{{ post.content }}</div>
            <div class="open">Open</div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    @include dflex(space-between, center);
    border: 1px #000 solid;
    position: relative;
}

.date {
    transform: rotate(-90deg);
}

.open {
    position: absolute;
}
</style>