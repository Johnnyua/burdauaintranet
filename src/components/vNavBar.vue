<template>
    <nav class="nav-bar">
        <div class="nav-bar__list">
            <v-button class="nav-bar__item" @click="$router.push('/')">{{ namePage[$lang.value].home}}</v-button>
            <v-button class="nav-bar__item" @click="$router.push('/about')">{{ namePage[$lang.value].about }}</v-button>
            <v-button class="nav-bar__item" @click="$router.push('/documents')">{{ namePage[$lang.value].documents }}</v-button>
            <v-button class="nav-bar__item" @click="$router.push('/services')">{{ namePage[$lang.value].services }}</v-button>
            <v-button class="nav-bar__item" @click="$router.push('/employee')">{{ namePage[$lang.value].employee }}</v-button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'vNavBar',
    data() {
        return {
            namePage: {
                en: {
                    home: 'News',
                    about: 'About',
                    documents: 'Documents',
                    services: 'Services',
                    employee: 'To Employee',
                },
                ua: {
                    home: 'Новини',
                    about: 'Про нас',
                    documents: 'Документи',
                    services: 'Сервіси',
                    employee: 'Співробітнику',
                }
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.nav-bar {
        @include dflex(flex-end, center);
        margin: 0 0 0 20px;
    }

    @media screen and (max-width:1150px) {
        .nav-bar__list {
            @include dflex(center,center);
            // flex-direction: column;
        }
    }
    .nav-bar__item {
        margin: 0 60px 0 0;
        font-weight: 700;
        &::after {
            @include before-after-line(0, 2px, $colordarkblue);
            transition: width .3s;
        }
        &:hover::after {
            width: 50%;
        }
    }
</style>