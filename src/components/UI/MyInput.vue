<template>
    <input 
        :value="modelValue" 
        @input="updateInput" 
        class="input" 
    />
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: "",
    },
    methods: {
        updateInput(e) {
            this.$emit("update:modelValue", e.target.value)
        }
    },
};
</script>

<style lang="scss" scoped>

</style>