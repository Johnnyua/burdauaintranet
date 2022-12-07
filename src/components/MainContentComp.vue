<template>
    <main >
        <post-list 
            :posts="formatedPublishedPosts" 
            :classObject="classes"
            @openPost="openPost"
            />
        <pagination-comp 
            v-if="!isLoading" 
            :pageNumbers="totalPages" 
            :selectedPage="currentPage"
            @clickOnNumber="changePage"
            @clickFirstPage="jumpToFirstPage" 
            @clickLastPage="jumpToLastPage"
            />
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
                scrollTo(0, 0);

            } catch (error) {
                console.log(error.message);
            }
        },
        openPost(post) {
            location.href = post.url;
        },
        changePage(page) {
            this.currentPage = page;
        },
        jumpToFirstPage() {
            this.currentPage = 1;
        },
        jumpToLastPage() {
            this.currentPage = this.totalPages;
        },
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
                const title = item.title?.split(' ').slice(0, 5).join(' ').toUpperCase();
                item.title = title.replace(/,\s*$/, "");

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