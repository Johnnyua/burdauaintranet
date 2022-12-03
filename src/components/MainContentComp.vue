<template>
    <main class="main-content-container">
        <post-list :posts="formatedPublishedPosts" :classObject="classes" />
        <pagination-comp v-if="!isLoading" :pageNumbers="totalPages" :selectedPage="currentPage"
            @clickOnNumber='changePage' />
        <div 
            v-if="isLoading" 
            class="loader"></div>

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
                this.isLoading = false;

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
    position: relative;
    padding: 0 0 0 44px;
    margin: 0 0 10px 0;
    width: 100%;
    height: 100%;

    .pagination {
        @include dflex(space-between, center);
    }
}

.loader {
    position: absolute;
    top: 30%;
    left: 50%;
    // border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 1em solid $colordarkblue;
    border-right: 1em solid $colorblack;
    border-bottom: 1em solid $colorblue;
    border-left: 1em solid $colorpink;
    width: 70px;
    height: 70px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>