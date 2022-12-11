<template>
  <div class="carousel__wrapper">
    <div class="carousel">
      <v-carousel-item
        v-for="item in carouselItems.items"
        class="carousel__item"
        :class="{ active: item.id == carouselItems.items[0].id}"
        :key="item.id"
        :item="item"
      >
      </v-carousel-item>
    </div>
    <div class="item__name name">
      <div class="name">
        <div class="name__first">{{ itemFullName[0]}}</div>
        <div v-if="(itemFullName.length > 1)">{{ itemFullName[1] }}</div>
      </div>
      <div class="pagination item__prev">&lt;</div>
      <div class="pagination item__next">&gt;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vCarousel",
  props: {
    carouselItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    itemFullName() {
     return this.carouselItems.itemName.split(' ');
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel__wrapper {
  @include dflex(center, center);
  flex-direction: column;
  // margin-left: auto;
  // margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  height: 300px;
  width: 100%;

  .item__name {
    font-weight: 700;
    width: 100%;
    text-align: center;
    position: relative;

    .pagination {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;

      &.item__prev {
        right: 0;
      }

      &.item__prev {
        left: 0;
      }
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
  transform: translate3d(80px, 0px, 0px);
}

.carousel__item {
  @include dflex(center, center);
  flex-direction: column;
  flex: 1 0 33.333%;
  margin-right: 20px;
  min-width: 40%;
  max-height: 180px;
  height: 100%;
  position: relative;
  &.active {
    min-width: 45%;
    max-width: 120px;
    max-height: 225px;
  }
}

@media screen and (max-width: 550px) {
  .carousel {
    left: 0;
  }
}
</style>