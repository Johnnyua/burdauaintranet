<template>
    <section>
        <post-item
            v-for="post in posts" 
            :key="post.url" 
            class="list-item"
            :post="post"
        />
    </section>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
    props: {
        posts: {
            type: Array,
            default: () => []
        }
    },    
    components: { PostItem },
}
</script>

<style lang="scss" scoped>

</style>