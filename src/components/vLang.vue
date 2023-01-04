<template>
  <div class="lang">
    <v-button
      value="ua"
      :class="{ active: selectedLang == 'ua' }"
      @click="changeLanguage"
      >Укр
    </v-button>
    <v-button
      value="en"
      :class="{ active: selectedLang === 'en' }"
      @click="changeLanguage"
      >Eng
    </v-button>
  </div>
</template>

<script>
export default {
  name: "vLang",
  data() {
    return {
      selectedLang: undefined,
    };
  },
  methods: {
    changeLanguage(e) {
      this.selectedLang = e.target.value;
      localStorage.setItem("lang", this.selectedLang);
      this.$lang.value = this.selectedLang;
    },
  },
  mounted() {
    this.selectedLang = localStorage.getItem("lang") || "ua";
  },
};
</script>

<style lang="scss" scoped>
.lang {
  display: flex;
  border: 1px $colorwhite solid;
  border-radius: 50px;
  margin: 0 10px;

  .btn {
    color: $colorwhite;
    padding: 0.5em 1em;
    &.active {
      background-color: $colorwhite;
      border-radius: 50px;
      color: $colordarkblue;
      transition: background-color 1000ms linear;
    }
  }
}
</style>
