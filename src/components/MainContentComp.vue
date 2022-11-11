<template>
    <main class="main-content-container">
        <section class="main-content__list">
            <post-list class="list-main">
                <post-item></post-item>    
            </post-list>        
            <div class="pagination">
                <div class="pagination__previous"></div>
                <div class="pagination__number">123</div>
                <div class="pagination__next"></div>
            </div>
        </section>    
    </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostItem from "@/components/PostItem.vue";
    export default {
    components: { PostList, PostItem }    
    }
</script>

<style lang="scss" scoped>

</style>