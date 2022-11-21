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
import axios from "axios";
export default {
        data() {
            return {
                posts: [],
                pageNumbers:[1,2,3]
            }
    },
        methods: {
            loadPosts() {
                const url = 'https://newsapi.org/v2/everything?' +
                    'q=Apple&' +
                    'sortBy=publishedAt&' +
                    'apiKey=ad3124987f88443ea4bf7df20ac7cc98';
                try {
                    const response = await axios.get("",
                        {
                            params: {
                                language: [en, it]
                        }
                        
                    })    
                } catch (error) {

                }
            }
    },
        mounted() {
            this.loadPosts();
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