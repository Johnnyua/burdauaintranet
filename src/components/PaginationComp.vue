<template>
    <div class="pagination">
        <div class="pagination__previous">
            <div class="arrow">
                <i>&lt;</i>
            </div>
            <div class="line"></div>
        </div>
        <ul class="pagination__number">
            <li v-for="number in pageNumbers" :key="number">{{number}}</li>
        </ul>
        <div class="pagination__next">
            <div class="arrow">
                <i>&gt;</i>
            </div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
    props: {
        pageNumbers: {
            type: Array,
            default: () => []
        }
    }    
    }
</script>

<style lang="scss" scoped>
.pagination {
    padding: 5px;
}

.pagination__number {
    display: flex;
}

.pagination__previous,
.pagination__next {

    .arrow {
        display: inline-block;
        width: 3em;
        height: 3em;
        border: 1.5px $colordarkblue solid;
        border-radius: 50%;
        text-align: center;
        position: relative;
        i {
            display: inline-block;
            text-align: center;
            margin-top: 0.625em;
        }
    }

}
.pagination__previous .line,
.pagination__next .line {
        //position: absolute;
        //top: 50%;
        display: inline-block;
        border: 1.5px $colordarkblue solid;
        max-width: 7em;
        width: 7em;
        background: $colordarkblue;
}

</style>