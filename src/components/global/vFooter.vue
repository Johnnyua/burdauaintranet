<template>
    <footer class="main-footer-container">
        <div class="footer__logo">
            <logo-comp></logo-comp>
        </div>
        <div class="footer__content">
            <div class="content__cookies">
                <a :href="cookiesPolicy.link">{{cookiesPolicy.text}}</a>
            </div>
            <div class="content__copyrights">
                <span>{{ copyrights.author }} {{copyrights.year}} | </span>
                <span>All rights reserved</span>
            </div>
        </div>
        <v-popup class="popup-wrapper">
            <template v-slot:header>
                <h2>Cookies Policy</h2>
            </template>
        </v-popup>
    </footer>
</template>

<script>
import LogoComp from '@/components/LogoComp.vue';
export default {
    name: 'vFooter',
    props: {
        copyrights: {
            author: '',
            year:''
        },
        cookiesPolicy: {
            link: '',
            text:''
        },
    },
    components: { LogoComp }
}
</script>

<style lang="scss" scoped>
.main-footer-container {
    @include dflex(space-between, center);
    width: 100%;
    padding: 5px;
    min-height: 60px;
    background-color: #000;
    position: relative;
}

.footer__content {
    @include dflex(space-between, center);
    color: $colorwhite;
    flex: 1 1 66.667%;
}

.footer__logo {
    flex: 1 1 33.333%;
    max-width: 270px;
}
.popup-wrapper {
    position: absolute;
    bottom: 0;
    z-index: 9998;
    width: 50%;
    background-color: $colorwhite;
    
}
</style>