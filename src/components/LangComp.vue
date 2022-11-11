<template>
    <div class="lang">
        <my-button 
            :class="{active:isActive}"
            @click="changeLanguage('ua')">Укр
        </my-button>
        <my-button @click="changeLanguage('en')">Eng</my-button>
    </div>
</template>

<script>
export default {
        data() {
            return {
                isActive: true
            }
        },
    methods: {
            changeLanguage(lang) {
                console.log(lang);    
            }    
        }    
    }
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
        }
    }
</style>