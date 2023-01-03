<template>
    <div>
        <div class="site-link-mobile">
            <div id="burger" class="drop-down-menu-mobile-button">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="main-navbar-container-mobile">
                <v-nav-bar></v-nav-bar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vBurgerMenu',

}
</script>

<style lang="scss" scoped>
.site-link-mobile {
    display: block;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 0;
    text-align: left;
    margin-bottom: 10px;
}

.drop-down-menu-mobile-button {
    height: 15px;
    width: 30px;
    position: relative;
    cursor: pointer;

    div {
        position: absolute;
        height: 1px;
        width: 30px;
        background-color: $colorblack;
        top: 7px;
        left: 0;

        &:first-child {
            top: 0px;
        }

        &:last-child {
            top: 13px;
        }

        &.burger-rotate-positive {
            transform: rotate(45deg);
            transition: transform 0.7s ease 0.5s;
            top: 7px;
        }
        &.burger-rotate-negative {
        transform: rotate(-45deg);
            transition: transform 0.7s ease 0.5s;
            top: 7px;
        }
    }
}
.main-navbar-container-mobile {

    min-width: 33%;
    height: 100vh;
    border-top: 1px solid #cac8c8;
    border-bottom: 1px solid #cac8c8;
    border-bottom-right-radius: 100%;
    background-color: #f5f7fa;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    // transform: translateX(-1000px);
    transition: transform 0.7s ease-in-out;
}
</style>