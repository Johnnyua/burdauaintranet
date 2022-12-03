<template>
    <aside class="main-side-container">
        <social-comp 
            class="side side__social"
            :socialUrl="companySocial">
        </social-comp>
         <div 
            class="side side__list" 
            style="background-color: pink;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto? Voluptates obcaecati quasi
        ducimus explicabo? Rem suscipit ratione minima cumque.</div>
    </aside>
</template>

<script>
import SocialComp from './SocialComp.vue';
export default {
    data() {
        return {
            companySocial: {
                website: 'https://burda.ua/',
                youtube: '',
                facebook: '',
                instagram: ''
            }
        }
    },
    components: { SocialComp }
}
</script>

<style lang="scss" scoped>
.main-side-container {
    @include dflex(space-between, center);
    flex-direction: column;
    border: 1px solid #000;
    max-width: 270px;
    min-width: 170px;
    height: 100%;
    width: 100%;

    .side {
        flex: 1 1 50%;
        width: 100%;
    }
}
</style>