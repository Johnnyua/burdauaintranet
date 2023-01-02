<template>
    <header class="main-header">
        <v-logo class="header__logo"></v-logo>
        <div class="nav-lang-container">
            <v-nav-bar class="navbar-container"></v-nav-bar>
            <div class="lang-search-container">
                <my-search @click="changeSearch" />
                <transition name="slide-fade">
                    <my-input
                        v-show="isSearchActive"
                        v-model.trim="searchText" 
                        ref="searchinput"
                    />
                </transition>
                <v-lang />
            </div>

        </div>

    </header>
</template>

<script>
export default {
    name: 'vHeader',
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
}
</script>

<style lang="scss" scoped>
.main-header {
    @include dflex(space-between, center);
    margin: 0 0 20px 0;
    min-height: 70px;
    width: 100%;
}

@media screen and (max-width:1255px) {
    .navbar-container {
        flex-direction: column;
    }
}

.header__logo {
    flex: 1 1 33.333%;
    max-width: 270px;
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