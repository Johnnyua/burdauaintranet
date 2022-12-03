<template>
    <main class="main-content-container">
        <post-list 
            :posts="formatedPublishedPosts"
            :classObject="classes"
        />
        <pagination-comp 
            v-if="!isLoading"
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
                limitOfPage: 5,
                totalPages: 0,
                isLoading: true,
                classes: {
                    item: 'post-item',
                    itemImg: 'post__img',
                    itemDate: 'post__date',
                    itemContent: 'post__content',
                    itemIcon: 'post__icon',
                    itemTitle: 'post_title',
                    itemDescription: 'post_description'
                }
            }
    },
        methods: {
            async loadPosts() {
                try {
                    this.posts = [];
                    const response = await getPosts(this.currentPage);
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
            // this.loadPosts();
    },
        computed: {
            formatedPublishedPosts() {
                return this.posts.map((item) => {
                    const date = new Date(Date.parse(item.publishedAt));
                    const postDay = date.getDate();
                    const postMonth = date.getMonth();
                    const postYear = date.getFullYear();
            
                    item.publishedAt = [postDay, postMonth, postYear].join('.');
                    if (item.urlToImage === null) {
                        item.description = item.description?.slice(0, 350) ?? 'No description...';    
                    } else {
                        item.description = item.description?.slice(0, 100) ?? 'No description...';
                    }
                    item.title = item.description?.slice(0, 20).toUpperCase();
                    
                    return item;
                })
            }
    },
    watch: {
        currentPage(newValue) {
            this.currentPage = newValue;
            this.loadPosts();
        }
    },
    components: { PostList, PaginationComp }    
    }
</script>

<style lang="scss" scoped>
.main-content-container {
    padding: 0 0 0 44px;
    margin: 0 0 10px 0;
    width: 100%;
    height: 100%;
    
    .pagination {
        @include dflex(space-between, center);
    }
}
</style>