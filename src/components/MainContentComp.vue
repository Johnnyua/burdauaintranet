<template>
    <main class="main-content-container">
        <post-list class="main-content__list"
        />
        <div class="pagination">
            <div class="pagination__previous">&lt;</div>
            <div class="pagination__number">123</div>
            <div class="pagination__next">&gt;</div>
        </div>
    </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
    export default {
    components: { PostList }    
    }
</script>

<style lang="scss" scoped>
.main-content-container {
    padding: 0 0 0 44px;
    width: 100%;
    .pagination {
        @include dflex(space-between, center);
    }
}

.main-content__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50% 50%;
    border: 3px #000 solid;
    height: 715px;
}
</style>