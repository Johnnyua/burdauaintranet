<template>
  <div class="wrapper">
    <v-header />
    <router-view :key="$route.fullPath"></router-view>
    <v-footer 
      :copyrights="copyrights"
      :cookiesPolicy="cookiesPolicy">
    </v-footer>
</div>
</template>

<script>
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