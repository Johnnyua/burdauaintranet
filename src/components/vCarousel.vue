<template>
    <div>
        <v-carousel-item 
        v-for="item in items"
        :key="item.id"/>
    </div>
   </template>

<script>
export default {
    name: 'vCarousel',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>

</style>