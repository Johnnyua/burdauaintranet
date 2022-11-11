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
                        v-show="isSearch"
                        :v-model="searchText" 
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
            isSearch: false,
        }
    },
    methods: {
        changeSearch(e) {
             this.$refs.searchinput.$el.focus();
             this.isSearch = !this.isSearch; 
             this.searchText = '123'            
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
    height: 70px;
    width: 100%;
}

.nav-lang-container {
    @include dflex(space-between, center);
}

.lang-search-container {
    @include dflex(space-between, center);
    background-color: $colorgrey;

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