<template>
    <div class="pagination">
        <div class="pagination__previous">
            <div class="arrow">
                <i>&lt;</i>
            </div>
            <div class="line"></div>
        </div>
        <ul class="pagination__number list">
            <li 
                class="list__item" 
                :class="{ active: pageNumber === selectedPage}"
                v-for="pageNumber in pages" 
                :key="pageNumber"
                @click="$emit('clickOnNumber', pageNumber)">
                {{ pageNumber }}
            </li>
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
    data() {
        return {
            numShown: 10     
        }
    },
    props: {
        pageNumbers: {
            type: Number,
            default: 0
        },
        selectedPage: {
            type: Number,
            default: 0
        }
    },
    emits: ['clickOnNumber'],
    computed: {
        pages() {
            const numShown = Math.min(this.numShown, this.pageNumbers);
            let first = this.selectedPage - Math.floor(numShown / 2);
            first = Math.max(first, 1);
            first = Math.min(first, this.pageNumbers - numShown + 1);
            return [...Array(numShown)].map((k, i) => i + first);
        }    
    },
}
</script>

<style lang="scss" scoped>
.pagination {
    padding: 5px;
}

.pagination__number.list {
    display: flex;
}

.list__item {
    cursor: pointer;
    color: $colordarkblue;
    padding: 1em;
    width: 40px;
    height: 40px;
    text-align: center;

    &:hover {
        background-color: $colordarkblue;
        color: $colorwhite;
    }
    &.active{
        background-color: $colordarkblue;
        color: $colorwhite;
        border-radius: 50%;
    }
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