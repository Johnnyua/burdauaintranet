<template>
    <div class="logo">
       <img 
        @click="$router.push('/')"    
        src="@/assets/img/logo.png" alt="Logo">
    </div>
</template>

<script>
    export default {
    name: 'vLogo',    
    }
</script>

<style lang="scss" scoped>
.logo {
    cursor: pointer;
    max-width: 150px;
}
</style>