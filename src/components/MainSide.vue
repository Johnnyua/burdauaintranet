<template>
  <aside>
    <v-social class="social-container side" :socialUrl="companySocial" />
    <div class="carousel-container side">
      <div class="carousel__title">{{ carousel.title[$lang.value] }}</div>
      <div class="carousel__wrapper">
          <v-carousel
            :styleObject="inlineCarouselStyle"
            v-if="carousel.items.length > 0"
            :carouselItems="carousel.items"
            :currentItemIndex="currentItemIndex"
            @clickCarouselPrev="clickCarouselPrev"
            @clickCarouselNext="clickCarouselNext"
          />
          <div v-else class="carousel__error">
            {{ carousel.error[$lang.value] }}
          </div>
      </div>
      <v-button class="carousel__button" @click="mailToBirthday">
        {{ carousel.button[$lang.value] }}
      </v-button>
    </div>
  </aside>
</template>

<script>
import { loadEmployee } from "@/api/loadEmployee";
import { generateAvatar } from "@/api/generateAvatar";
export default {
  name: 'MainSide',
  data() {
    return {
      companySocial: {
        website: "https://burda.ua/",
        youtube: "",
        facebook: "",
        instagram: "",
      },
      carousel: {
        title: {
          en: "Birthdays",
          ua: "Дні народження",
        },
        button: {
          en: "Congratulate",
          ua: "Привітати",
        },
        error: {
          en: "No birthdays in this period",
          ua: "В даному періоді немає днів народження",
        },
        items: [],
        // itemName: "",
      },
      inlineCarouselStyle: {
        transform: "translate3d(calc(50% - 60px), 0px, 0px)",
      },
      currentItemIndex: 0,
    };
  },
  methods: {
    async loadCarouselItems() {
      const employee = await loadEmployee();
      this.carousel.items.push(...employee.data);
      if (this.carousel.items.length > 0) {
        this.carousel.items.forEach(async (item) => {
          const avatarIndex = Math.ceil(Math.random() * 78);
          const avatarUrl = await generateAvatar(avatarIndex);
          item.urlToImage = avatarUrl.request.responseURL;
          return item;
        });
      }
    },
    clickCarouselPrev() {
      if (this.currentItemIndex === 0) {
        this.currentItemIndex = this.carousel.items.length - 1;
      } else {
        this.currentItemIndex--;
      }
    },
    clickCarouselNext() {
      if (this.currentItemIndex < this.carousel.items.length - 1) {
        this.currentItemIndex++;
      } else {
        this.currentItemIndex = 0;
      }
    },
    mailToBirthday() {
      const email = this.carousel.items[this.currentItemIndex].email;
      if (email) {
        var sendMail = 'mailto:' + email;
        window.location.href = sendMail;
      }
    },
  },
  mounted() {
    this.loadCarouselItems();
  },
  watch: {
    currentItemIndex() {
      const shift = 60 + this.currentItemIndex * 120;
      this.inlineCarouselStyle.transform = `translate3d(calc(50% - ${
        shift + "px"
      }), 0px, 0px)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.social-container {
  @include dflex(center, center);
  background-color: $colorgrey;
  flex: 0 1 33%;
  max-height: 320px;
}

.side {
  width: 100%;
}

.carousel-container {
  @include dflex(space-between, center);
  flex-direction: column;
  flex: 1 1 67%;
  background-color: $colorpink;
  // padding: 1em;
}

.carousel__title {
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: uppercase;

  &::after {
    @include before-after-line(3em, 2px, $colorblack);
    margin: 0.5em 0;
  }
}

.carousel__wrapper {
  @include dflex(center, center);
  flex-direction: column;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 300px;
  width: 100%;
}
.carousel__button {
  background-color: $colorblue;
  border-radius: 2em;
  color: $colorwhite;
  max-width: 10em;
  margin: 25px auto;
  padding: 6px 22px;
}
</style>