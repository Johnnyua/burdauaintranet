<template>
    <div class="main-container">
        <main-content-comp />
        <aside-comp></aside-comp>
    </div>

</template>

<script>
import MainContentComp from "@/components/MainContentComp.vue";
import AsideComp from "@/components/AsideComp.vue";
    export default {
    components: {MainContentComp, AsideComp}    
    }
</script>

<style lang="scss" scoped>
@media screen and (min-width: 750px) {
    .main-container {
        display: flex;
        flex-direction: column-reverse;
    }
}
.main-container {
    @include dflex(space-between, flex-start);
    flex-direction: row-reverse;
    flex: 1 1 auto;
    margin: 20px 0 0 0;
    width: 100%;

}
</style>