<template>
  <div>
    <div class="burger">
      <div
        class="drop-down-menu-mobile-button"
        @click="$emit('showBurger', $event.target.value)"
      >
        <div :class="{ 'burger-rotate-positive': show }"></div>
        <div v-show="!show"></div>
        <div :class="{ 'burger-rotate-negative': show }"></div>
      </div>
      <transition name="burger-fade">
        <div class="main-navbar-container-mobile" v-show="show">
          <v-nav-bar class="navbar-container"></v-nav-bar>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "vBurgerMenu",
  emits: ["showBurger"],
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.burger {
  display: inherit;
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
      top: 14px;
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
  @include dflex(flex-start, center);
  flex-direction: column;
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

.navbar-container {
  margin: 20px 0;
  padding: 0 10px;
}
.burger-fade-enter-active {
  transition: all 0.5s ease-out;
}

.burger-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.burger-fade-enter-from .burger-fade-leave-to {
  opacity: 0;
}

.burger-fade-enter-from {
  transform: translateX(-100%);
}

.burger-fade-leave-to {
  transform: translateX(-100%);
}
</style>
