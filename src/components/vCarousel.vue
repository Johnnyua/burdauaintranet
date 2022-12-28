<template>

  <div
    class="carousel"
    :style="styleObject"
  >
  <transition-group appear name="fade">
    <v-carousel-item
      v-for="(item, index) in carouselItems"
      class="carousel__item"
      :item="item"
      :currentItemIndex="currentItemIndex"
      :index="index"
      :key="item.id"
    >
    </v-carousel-item>
    </transition-group>
  </div>

  <div class="item__name name">
    <div class="name">
      <div class="name__first">{{ itemFullName[0] }}</div>
      <div v-if="itemFullName.length > 1">{{ itemFullName[1] }}</div>
      <div
        class="pagination item__prev"
        @click="$emit('clickCarouselPrev', $event)"
      >
        &lt;
      </div>
      <div
        class="pagination item__next"
        @click="$emit('clickCarouselNext', $event)"
      >
        &gt;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vCarousel",
  emits: ['clickCarouselPrev', 'clickCarouselNext'],
  props: {
    carouselItems: {
      type: Array,
      default: () => [],
    },
    currentItemIndex: {
      type: Number,
      default: 0,
    },
    styleObject: {
        type: Object,
        default: () => {}
      },
    },
  computed: {
    itemFullName() {
      return this.carouselItems[this.currentItemIndex].name.split(" ");
    },
  },
};
</script>

<style lang="scss" scoped>
.item__name {
  font-weight: 700;
  width: 100%;
  text-align: center;
  position: relative;

  .pagination {
    cursor: pointer;
    position: absolute;
    width: 9px;
    height: 18px;
    top: 50%;
    margin-top: -0.625em;

    &.item__next {
      right: 20px;
    }

    &.item__prev {
      left: 20px;
    }
  }
}

.carousel {
  @include dflex(flex-start, center);
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  box-sizing: content-box;
  transition: transform 1s ease;
}

@media screen and (max-width: 550px) {
  .carousel {
    left: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>