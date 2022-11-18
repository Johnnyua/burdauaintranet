<template>
    <main class="main-content-container">
        <post-list 
            class="main-content__list"
            :posts="posts"
        />
        <pagination-comp 
            :pageNumbers="pageNumbers"/>
    </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PaginationComp from "@/components/PaginationComp.vue";
export default {
        data() {
            return {
                posts: [],
                pageNumbers:[1,2,3]
            }
        },
    components: { PostList, PaginationComp }    
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