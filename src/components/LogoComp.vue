<template>
    <div class="logo">
       <img 
        @click="$router.push('/')"    
        src="@/assets/img/logo.png" alt="Logo">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.logo {
    max-width: 150px;
}
</style>