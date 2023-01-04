<template>
    <div class="pagination-container">
        <div 
            class="pagination-arrow first"
            @click="$emit('clickFirstPage', pageFirst)"
            >
        </div>
        <ul class="pagination__number list">
            <li 
                class="list__item" 
                :class="{ active: pageNumber === selectedPage }" 
                v-for="pageNumber in pages"
                :key="pageNumber" 
                @click="$emit('clickOnNumber', pageNumber)"
                >
                {{ pageNumber }}
            </li>
        </ul>
        <div 
            class="pagination-arrow last"
            @click="$emit('clickLastPage', pageLast)">
        </div>
    </div>
</template>

<script>
export default {
    name: 'vPagination',
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
    emits: ['clickOnNumber', 'clickLastPage', 'clickFirstPage'],
    created() {
        window.addEventListener("resize", this.resizeWindow);
    },
    destroyed() {
        window.removeEventListener("resize", this.resizeWindow);   
    },
    mounted() {
        if (innerWidth < 870) { this.numShown = 5 };
    },
    methods: {
        resizeWindow() {
            if (innerWidth < 870) {
                this.numShown = 5
            } else {
                this.numShown = 10    
            };    
        }
    },
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
.pagination-container {
    @include dflex(space-between, center);
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

    &.active {
        background-color: $colordarkblue;
        color: $colorwhite;
        border-radius: 50%;
    }
}

.pagination-arrow {
    position: relative;
    max-width: 40px;
    max-height: 40px;
    min-width: 30px;
    min-height: 30px;
    border: 1.5px solid $colordarkblue;
    border-radius: 50%;

    &::after,
    &::before {
        content: "";
        position: absolute;
        top: calc(50% - 5px);
        display: block;
        width: 10px;
        height: 10px;
        border-top: 1.5px solid $colorblue;
        border-left: 1.5px solid $colorblue;
    }



    &.first {

        &::after,
        &::before {
            transform: rotate(-45deg);
        }

        &::before {
            left: 0.5em;
        }

        &::after {
            left: 1em;
        }
        &:hover {
            transform: translateX(-5px);
        }
    }

    &.last {

        &::after,
        &::before {
            transform: rotate(135deg);
        }

        &::before {
            right: 0.5em;
        }

        &::after {
            right: 1em;
        }
                &:hover {
                    transform: translateX(5px);
                }
    }
}
</style>