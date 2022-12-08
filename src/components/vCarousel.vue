<template>
  <div class="carousel__wrapper">
    <div class="carousel">
      <v-carousel-item
        v-for="item in carouselItems"
        class="carousel__item"
        :key="item.id"
        :item="item"
      >
    </v-carousel-item>
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
};
</script>

<style lang="scss" scoped>
.carousel__wrapper {
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  // border-radius: 110px;
  width: 100%;
  height: 100%;
  max-height: 350px;
  overflow: hidden;
  margin: 0 auto;
}

.carousel {
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>