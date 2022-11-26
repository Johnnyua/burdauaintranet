<template>
    <main class="main-content-container">
        <post-list 
            class="main-content__list"
            :posts="formatedPublishedDatePosts"
        />
        <pagination-comp 
            :pageNumbers="totalPages"
            :selectedPage="currentPage"
            @clickOnNumber='changePage'/>
            
    </main>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import { getPosts } from "@/api/loadPosts";

export default {
        data() {
            return {
                posts: [],
                currentPage: 1,
                limitOfPage: 3,
                totalPages:0
            }
    },
        methods: {
            async loadPosts() {
                try {
                    const response = await getPosts();
                    this.totalPages = Math.ceil(response.data.totalResults / this.limitOfPage);
                    this.posts.push(...response.data.articles);
                      
                } catch (error) {
                        
                }
            },
            changePage(page) {
                this.currentPage = page;
            }       
    },
        mounted() {
            this.loadPosts();
    },
        computed: {
            formatedPublishedDatePosts() {
                return this.posts.map((item) => {
                    const date = new Date(Date.parse(item.publishedAt));
                    const postDay = date.getDate();
                    const postMonth = date.getMonth();
                    const postYear = date.getFullYear();
            
                    item.publishedAt = [postDay, postMonth, postYear].join('.');
                    return item;
                })
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