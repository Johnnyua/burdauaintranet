<template>
    <div v-if="show">
        <div class="popup-content">
            <div class="popup__header">
                <slot name="header"></slot>
            </div>
            <div class="popup__body">
                <slot name="body"></slot>
            </div>
            <div class="popup__footer">
                <slot name="footer"></slot>
            </div>
            <div class="popup__btn">
                <v-button>
                    <slot name="btn__ok"></slot>
                </v-button>
                <v-button>
                    <slot name="btn__close"></slot>
                </v-button>
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
.popup-content {
    @include dflex(center, center);
    flex-direction: column;
    padding: 5px;
}
</style>