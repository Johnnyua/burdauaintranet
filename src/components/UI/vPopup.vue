<template>
    <div v-if="show">
        <div class="popup-content">
            <div class="popup__header popup">
                <slot name="header"></slot>
            </div>
            <div class="popup__body popup">
                <slot name="body"></slot>
            </div>
            <div class="popup__footer popup">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vPopup',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.popup {
    margin-bottom: 10px;
}
.popup-content {
    @include dflex(center, center);
    flex-direction: column;
    padding: 10px;
}
</style>