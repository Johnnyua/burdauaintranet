<template>
  <div class="wrapper">
    <v-header />
    <router-view :key="$route.fullPath"></router-view>
    <v-footer :copyrights="copyrights" :cookiesPolicy="cookiesPolicy">
    </v-footer>
    <transition name="popup-fade">
      <v-popup class="popup-wrapper" :show="policyPopupShow" ref="popupScroll">
        <template v-slot:header>
          <h2>Cookies Policy</h2>
        </template>
        <template v-slot:body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            dolore.
          </p>
        </template>
        <template v-slot:footer>
          <div class="popup-btn">
            <v-button class="btn btn-ok" @click="policyConfirm">OK</v-button>
            <v-button class="btn btn-close" @click="policyRefuse"
              >Close</v-button
            >
          </div>
        </template>
      </v-popup>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyrights: {},
      cookiesPolicy: {},
      en: {
        popupTitleText: "Cookies Policy",
        popupBody: "",
      },
      policyPopupShow: false,
      policyConfirmed: false,
    };
  },
  methods: {
    showPolicyPopupShow() {
      const policySaved = localStorage.getItem("policyConfirmed");
      if (policySaved === null) {
        this.policyPopupShow = true;
      }
    },
    policyConfirm(e) {
      this.policyConfirmed = true;
      this.policyPopupShow = false;
      localStorage.setItem("policyConfirmed", this.policyConfirmed);
    },
    policyRefuse(e) {
      this.policyConfirmed = false;
      this.policyPopupShow = false;
      this.policyConfirmed = localStorage.setItem(
        "policyConfirmed",
        this.policyConfirmed
      );
    },
  },
  mounted() {
    this.copyrights.author = "Yevhen Diachenko";
    this.copyrights.year = new Date().getFullYear();

    this.cookiesPolicy.link = "#";
    this.cookiesPolicy.text = "cookies";

    this.showPolicyPopupShow();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include dflex(space-between, center);
  position: relative;
  flex-direction: column;
  max-width: 1920px;
  min-width: 320px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  &::before {
    @include before-after-line(10px, 60px, $colorgrey);
    position: absolute;
    top: 0;
    left: 0;
  }
}

.popup-wrapper {
  position: fixed;
  bottom: 0;
  z-index: 9998;
  width: 50%;
  background-color: $colorwhite;
  color: $colorblack;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    border-bottom: 1px solid $colorblue;
    font-weight: 700;
    padding: 5px;
  }

  .btn {
    width: 5em;
    min-width: 3em;
    border-radius: 25px;
    padding: 5px;
    margin: 3px 10px;
  }

  .btn-ok {
    background-color: $colorblue;
    color: $colorwhite;
  }

  .btn-close {
    background-color: $colorpink;
    color: $colordarkblue;
  }

  .popup-btn {
    @include dflex(center, center);
    flex-wrap: wrap;
  }
}

.popup-fade-enter-active {
  transition: all 0.5s 2s ease-out;
}

.popup-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.popup-fade-enter-from .popup-fade-leave-to {
  opacity: 0;
}

.popup-fade-enter-from {
  transform: translateY(100%);
}
.popup-fade-leave-to {
  transform: translateX(20px);
}
</style>
