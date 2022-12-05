<template>
    <aside>
        <social-comp class="social-container side" :socialUrl="companySocial">
        </social-comp>
        <div class="side side__list" style="background-color: pink;">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente, architecto? Voluptates obcaecati quasi
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
.social-container {
    @include dflex(center, center);
    background-color: $colorgrey;
    flex: 0 1 33%;
    max-height: 320px;
}
.side__list {
    flex: 1 1 67%;
}
.side {
    
    width: 100%;
}
</style>