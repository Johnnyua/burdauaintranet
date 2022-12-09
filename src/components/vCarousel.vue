<template>
  <div class="carousel__wrapper">
    <div class="carousel">
      <v-carousel-item v-for="item in carouselItems" class="carousel__item" :key="item.id" :item="item">
      </v-carousel-item>
    </div>
    <div class="item__name">Name</div>
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
};
</script>

<style lang="scss" scoped>
.carousel__wrapper {
  @include dflex(center, center);
  border: 1px solid #000;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 350px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;

  .item__name {
    width: 100%;
    text-align: center;
  }
}

.carousel {
  @include dflex(center, center);
  height: 100%;
  width: 100%;
  position: relative;
  left: -70px;
  min-height: 100px;
}

.carousel__item {
  @include dflex(center, center);
  flex-direction: column;
  flex: 1 0 33.333%;
  margin-right: 20px;
  max-height: 225px;
  height: 100%;
  position: relative;
}

@media screen and (max-width: 550px) {
  .carousel {
    left: 0;
  }
  
}
</style>