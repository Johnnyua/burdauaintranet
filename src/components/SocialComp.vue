<template>
    <div class="social-container">
        <ul class="social-list item">
            <li class="item__galery">
                <a :href="socialUrl.website" class="app-icon icon-website" target="_blank"></a>
                <!-- <span class="app-name">YouTube</span> -->
            </li>
            <li class="item__galery">
                <a :href="socialUrl.youtube" class="app-icon icon-youtube" target="_blank"></a>
                <!-- <span class="app-name">YouTube</span> -->
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
.item__galery {
    position: relative;
    height: 32px;
    width: 32px;
}

.app-icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
</style>