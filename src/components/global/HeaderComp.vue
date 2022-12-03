<template>
    <header class="main-header">
        <div>
            <logo-comp></logo-comp>
        </div>
        <div class="nav-lang-container">
            <NavbarComp></NavbarComp>
            <div class="lang-search-container">
                <my-search @click="changeSearch" />
                <transition name="slide-fade">
                    <my-input
                        v-show="isSearchActive"
                        v-model.trim="searchText" 
                        ref="searchinput"
                    />
                </transition>
                <lang-comp />
            </div>

        </div>

    </header>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import LangComp from '@/components/LangComp.vue';
import LogoComp from '@/components/LogoComp.vue';
export default {
    data() {
        return {
            searchText: '',
            isSearchActive: false,
        }
    },
    methods: {
        changeSearch(e) {
            this.isSearchActive = !this.isSearchActive;
            this.$nextTick(() => {
                const searchinput = this.$refs.searchinput.$el;
                searchinput.focus();    
            })
            if (!this.isSearchActive) { this.searchText = '' }
                         
        },
    },
    watch: {
        isSearch() {
            if (this.isSearch) { this.$refs.searchinput.$el.focus(); }
        }    
    },
    components: { NavbarComp, LangComp, LogoComp }
}
</script>

<style lang="scss" scoped>
.main-header {
    @include dflex(space-between, center);
    min-height: 70px;
    width: 100%;
}

.nav-lang-container {
    @include dflex(space-between, center);
    height: 100%;
}

.lang-search-container {
    @include dflex(space-between, center);
    background-color: $colorgrey;
    height: 80%;

    .hide {
        display: none;
    }
}

.slide-fade-enter-active {
    transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(50px);
    opacity: 0;
}
</style>