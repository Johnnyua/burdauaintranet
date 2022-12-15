<template>
  
    <div class="carousel">
      <v-carousel-item
        v-for="(item, index) in carouselItems"
        class="carousel__item"
        :class="{ active: item.id == carouselItems[0].id }"
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
        <div class="pagination item__prev">&lt;</div>
        <div class="pagination item__next">&gt;</div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "vCarousel",
  data() {
    return {
      currentItemIndex: 0,
    };
  },
  props: {
    carouselItems: {
      type: Array,
      default: () => [],
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
  transform: translate3d(calc(50% - 60px), 0px, 0px);
}

@media screen and (max-width: 550px) {
  .carousel {
    left: 0;
  }
}
</style>