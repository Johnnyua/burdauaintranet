<template>
  <header class="main-header">
    <v-logo class="header__logo"></v-logo>
    <div class="nav-lang-container">
      <v-nav-bar class="navbar-container"></v-nav-bar>
      <div>
        <v-burger-menu
          class="navbar-mobile"
          :show="isMobileMenu"
          @showBurger="showMobileMenu"
        />
        <div class="lang-search-container">
          <my-search @click="changeSearch" />
          <transition name="slide-fade">
            <my-input
              v-show="isSearchActive"
              v-model.trim="searchText"
              ref="searchinput"
              @input="$store.commit('search/setSearchText', searchText)"
              @blur="clearCloseSearch"
              placeholder="Search..."
            />
          </transition>
          <v-lang v-show="!isSearchActive" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "vHeader",
  data() {
    return {
      searchText: "",
      isSearchActive: false,
      isMobileMenu: false,
    };
  },
  methods: {
    changeSearch(e) {
      this.isSearchActive = !this.isSearchActive;
      this.$nextTick(() => {
        const searchinput = this.$refs.searchinput.$el;
        searchinput.focus();
      });
      if (!this.isSearchActive) {
        this.searchText = "";
      }
    },
    showMobileMenu(e) {
      this.isMobileMenu = !this.isMobileMenu;
    },
    clearCloseSearch() {
      this.searchText = "";
      this.isSearchActive = !this.isSearchActive;
    },
  },
  watch: {
    isSearchActive() {
      if (this.isSearchActive) {
        this.$refs.searchinput.$el.focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  @include dflex(space-between, center);
  margin: 0 0 20px 0;
  min-height: 70px;
  width: 100%;
  flex-shrink: 0;
}

@media screen and (max-width: 1255px) {
  .navbar-container {
    @include dflex(flex-end, center);
    margin: 0 0 0 20px;
    flex-direction: column;
  }
}

.header__logo {
  flex: 1 1 33.333%;
  align-self: flex-start;
  max-width: 270px;
}

.nav-lang-container {
  @include dflex(space-between, center);
  height: 100%;
}

.navbar-mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .navbar-mobile {
    @include dflex(flex-end, center);
  }

  .navbar-container {
    display: none;
  }
}

.lang-search-container {
  @include dflex(space-between, center);
  background-color: $colorgrey;
  height: 80%;
  padding: 1rem;

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
