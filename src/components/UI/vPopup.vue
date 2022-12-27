<template>
    <div>
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
                <slot name="btn__first"></slot>
            </v-button>
            <v-button>
                <slot name="btn__second"></slot>
            </v-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>