<template>
  <div
    class="carousel"
    :style="styleObject"
  >
    <v-carousel-item
      v-for="(item, index) in carouselItems"
      class="carousel__item"
      :item="item"
      :currentItemIndex="currentItemIndex"
      :index="index"
      :key="item.id"
    >
    </v-carousel-item>
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
</template>em

<script>
export default {
  name: "vCarousel",
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
  transition-property: transform;
  box-sizing: content-box;
  // transform: translate3d(calc(50% - 60px), 0px, 0px);
}

@media screen and (max-width: 550px) {
  .carousel {
    left: 0;
  }
}
</style>