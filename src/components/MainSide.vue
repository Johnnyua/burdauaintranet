<template>
    <aside>
        <social-comp class="social-container side" :socialUrl="companySocial">
        </social-comp>
        <v-carousel 
            class="side carousel"
            :items="carouselItems"></v-carousel>
    </aside>
</template>

<script>
import SocialComp from './SocialComp.vue';
import { loadEmployee } from "@/api/loadEmployee";
import { generateAvatar } from "@/api/generateAvatar";
export default {
    data() {
        return {
            companySocial: {
                website: 'https://burda.ua/',
                youtube: '',
                facebook: '',
                instagram: ''
            },
            carouselItems: [],
        }
    },
    methods: {
        async loadCarouselItems() {
            const employee = await loadEmployee();
            this.carouselItems.push(...employee.data);

            this.carouselItems.map(async (item) => {
                const avatarUrl = await generateAvatar({ gender: 'male' });
                item.avatar = avatarUrl;
                console.log(avatarUrl);
                return item;
            })
            console.log(this.carouselItems);
        }    
    },
    mounted() {
        this.loadCarouselItems();    
    },
    components: { SocialComp }
}
</script>

<style lang="scss" scoped>
.social-container {
    @include dflex(center, center);
    background-color: $colorgrey;
    flex: 0 1 33%;
    max-height: 320px;
}
.carousel {
    flex: 1 1 67%;
    background-color: $colorpink;
}
.side {
    
    width: 100%;
}
</style>