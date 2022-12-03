<template>
    <section class="main-content__list">
        <transition-group name="list">
            <post-item class="list__items" v-for="post in posts" :key="post.url" :post="post" :classObject="classObject">
                <template #item-icon>
                    <div style="opacity:1">Open</div>
                </template>
            </post-item>
        </transition-group>
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
        classObject: {
            type: Object,
            default: () => { } 
        }
        
    },
    components: { PostItem },
}
</script>

<style lang="scss" scoped>
.main-content__list {
    grid-template: auto / 1fr;
    //grid-template-areas: 'postbig' 'postnormal' 'postnormal1';
}


@media screen and (min-width: 1024px) {
    .main-content__list {
        display: grid;
        grid-template: auto / 1fr 1fr 1fr;
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

.list-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
    transition: all 1s ease-in-out;
}

.list-enter-from {
    transform: translateY(1000px);
}
.list-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}

.list-move {
    transition: transform 1s ease;
}
</style>