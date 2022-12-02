<template>
    <aside class="main-side-container">
        <social-comp 
            :socialUrl="companySocial">
        </social-comp>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto? Voluptates obcaecati quasi
        ducimus explicabo? Rem suscipit ratione minima cumque.
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
    width: 270px;
    min-width: 270px;
    padding: 0 0 0 10px;
}
</style>