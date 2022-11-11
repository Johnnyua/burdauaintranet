<template>
    <footer class="main-footer-container">
        <div class="footer__logo">
            <logo-comp></logo-comp>
        </div>
        <div class="footer__content">
            <div class="content__cookies"></div>
            <div class="content__copyrights">
                <span>© Diachenko Yevhen 2022 | </span>
                <span>All rights reserved</span>
            </div>
        </div>
    </footer>
</template>

<script>
import LogoComp from '@/components/LogoComp.vue';
    export default {
    components: { LogoComp }    
    }
</script>

<style lang="scss" scoped>
.main-footer-container {
        @include dflex(space-between, center);
        width: 100%;
        padding: 5px;
    }
    .footer__logo {
        max-width: 115px;
    }
</style>