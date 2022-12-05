<template>
    <div>
        <ul class="social-list item">
            <li class="item__galery">
                <a :href="socialUrl.website" class="app-icon icon-website" target="_blank"></a>
            </li>
            <li class="item__galery">
                <a :href="socialUrl.youtube" class="app-icon icon-youtube" target="_blank"></a>
            </li>
            <li class="item__galery">
                <a :href="socialUrl.facebook" class="app-icon icon-facebook" target="_blank"></a>
            </li>
            <li class="item__galery">
                <a :href="socialUrl.instagram" class="app-icon icon-instagram" target="_blank"></a>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        socialUrl: {
            website: '',
            youtube: '',
            facebook: '',
            instagram: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.social-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;


    .item__galery {
        @include dflex(center, center);
        border: 1px solid $colorwhite;
        border-radius: 50%;
        position: relative;
        height: 32px;
        width: 32px;
        margin: 20px;
        padding: 25px;
        a {
            border-radius: 50%;
        }
    }
}


.app-icon {
    display: block;
    position: absolute;
    height: 32px;
    width: 32px;
}

.icon-youtube {
    background: url(@/assets/img/youtube_icon.png);
    background-size: cover;
}

.icon-website {
    background: url(@/assets/img/website_icon.png);
    background-size: cover;
}

.icon-facebook {
    background: url(@/assets/img/facebook_icon.png);
    background-size: cover;
}

.icon-instagram {
    background: url(@/assets/img/instagram_icon.png);
    background-size: cover;
}

@media screen and (max-width: 550px) {
    .social-list {
            @include dflex(center, center);
    }
}
</style>