<template>
  <div class="wrapper">
    <header-comp></header-comp>
    <router-view></router-view>
    <footer-comp 
      :copyrights="copyrights"
      :cookiesPolicy="cookiesPolicy">
    </footer-comp>
</div>
</template>

<script>
import HeaderComp from '@/components/global/HeaderComp.vue';
import FooterComp from '@/components/global/FooterComp.vue';
export default {
  data() {
    return {
      copyrights: {},
      cookiesPolicy:{},
    }
  },
  mounted() {
    this.copyrights.author = 'Yevhen Diachenko';
    this.copyrights.year = new Date().getFullYear();

    this.cookiesPolicy.link = '#';
    this.cookiesPolicy.text = 'cookies';
  },
  components: {
    HeaderComp, FooterComp
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  @include dflex(space-between, center);
  position: relative;
  flex-direction: column;
  max-width: 1920px;
  min-width: 320px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  &::before {
    @include before-after-line(10px, 60px, $colorgrey);
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>