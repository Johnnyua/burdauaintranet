<template>
    <div class="main-container">
        <main-content-comp class="main-content-container" />
        <main-side class="main-side-container"></main-side>
    </div>

</template>

<script>
import MainContentComp from "@/components/MainContentComp.vue";
import MainSide from "@/components/MainSide.vue";
export default {
    components: { MainContentComp, MainSide }
}
</script>

<style lang="scss" scoped>
.main-container {
    @include dflex(space-between, flex-start);
    flex-direction: row-reverse;
    flex: 1 1 auto;
    width: 100%;
}

.main-content-container {
    position: relative;
    padding: 0 0 0 44px;
    margin: 0 0 10px 0;
    width: 100%;
    height: 100%;

    .pagination {
        @include dflex(space-between, center);
    }
}

.main-side-container {
    @include dflex(space-between, center);
    flex-direction: column;
    border: 1px solid #000;
    max-width: 270px;
    min-width: 170px;
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 800px) {
    .main-container {
        flex-direction: column-reverse;
}

    

    .main-side-container {
        margin: 0 0 10px 0;
        max-width: 100%;
        width: 100%;
    }
}

@media screen and (max-width: 800px) {
    .main-content-container {
            padding: 0 0 0 1%;
        }
}
</style>