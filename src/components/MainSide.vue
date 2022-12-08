<template>
  <aside>
    <social-comp class="social-container side" :socialUrl="companySocial" />
    <div class="carousel-container side">
      <div class="carousel__title">{{ carousel.title[$lang.value] }}</div>
      
          <v-carousel
            v-if="carousel.items.length > 0"
            :carouselItems="carousel.items"
          />
          <div v-else class="carousel__error">
            {{ carousel.error[$lang.value] }}
         
      </div>
      <my-button class="carousel__button">{{
        carousel.button[$lang.value]
      }}</my-button>
    </div>
  </aside>
</template>

<script>
import SocialComp from "./SocialComp.vue";
import { loadEmployee } from "@/api/loadEmployee";
import { generateAvatar } from "@/api/generateAvatar";
export default {
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
          en: "Birsdays",
          ua: "Дні народження",
        },
        button: {
          en: "Congratulate",
          ua: "Привітати",
        },
        error: {
          en: "No birsdays in this period",
          ua: "В даному періоді немає днів народження",
        },
        items: [],
      },
    };
  },
  methods: {
    async loadCarouselItems() {
      const employee = await loadEmployee();
      this.carousel.items.push(...employee.data);
      this.carousel.items.forEach(async (item) => {
        const avatarIndex = Math.ceil(Math.random() * 78);
        const avatarUrl = await generateAvatar(avatarIndex);
        item.urlToImage = avatarUrl.request.responseURL;
        console.log(item);
        return item;
      });
    },
  },
  mounted() {
    this.loadCarouselItems();
  },
  components: { SocialComp },
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
  padding: 1em;
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




.carousel__button {
  background-color: $colorblue;
  border-radius: 2em;
  color: $colorwhite;
  max-width: 10em;
  padding: 6px 22px;
}
</style>