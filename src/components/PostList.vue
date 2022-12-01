<template>
    <section class="main-content__list">
        <post-item 
            class="list__items" 
            v-for="post in posts" 
            :key="post.url" 
            :post="post"
            :classObject="classes"
      >
        <template #item-icon>
            Open
        </template>
        </post-item>
        
    </section>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
    props: {
        posts: {
            type: Array,
            default: () => []
        },
        
    },
    data() {
        return {
            classes: {
                icon: ['active', 'block']
            }
        }
    },
    created() {
        console.log(this.classes);
    },
    components: { PostItem },
}
</script>

<style lang="scss" scoped>
.main-content__list {
    grid-template: 300px / 1fr;
    //grid-template-areas: 'postbig' 'postnormal' 'postnormal1';
}


@media screen and (min-width: 1024px) {
    .main-content__list {
        display: grid;
        grid-template: 300px / 1fr 1fr 1fr;
        grid-template-areas: 'postbig postbig postnormal1' 'postnormal2 postnormal3 postnormal4';
        //grid-template-columns: repeat(auto-fit, 1fr);
        
        .list__items {
            &:nth-child(1) {
                grid-area: postbig;
            }

            &:nth-child(2) {
                grid-area: postnormal1;
            }

            &:nth-child(3) {
                grid-area: postnormal2;
            }

            &:nth-child(4) {
                grid-area: postnormal3;
            }

            &:nth-child(5) {
                grid-area: postnormal4;
            }
                              
        }
    }
}
</style>