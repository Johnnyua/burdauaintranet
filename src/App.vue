<template>
  <div class="wrapper">
    <header-comp></header-comp>
    <router-view></router-view>
    <footer-comp></footer-comp>
</div>
</template>

<script>
import HeaderComp from '@/components/global/HeaderComp.vue';
import FooterComp from '@/components/global/FooterComp.vue';
export default {
  components: {
    HeaderComp, FooterComp
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include dflex(space-between, center);
  flex-direction: column;
  max-width: 1920px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 20px 0 20px;
}
</style>