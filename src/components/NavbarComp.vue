<template>
    <nav class="nav-bar">
        <div class="nav-bar__list">
            <my-button class="nav-bar__item" @click="$router.push('/')">{{namePage[lang].home}}</my-button>
            <my-button class="nav-bar__item" @click="$router.push('/about')">{{ namePage[lang].about }}</my-button>
            <my-button class="nav-bar__item" @click="$router.push('/documents')">{{ namePage[lang].documents }}</my-button>
            <my-button class="nav-bar__item" @click="$router.push('/services')">{{ namePage[lang].services }}</my-button>
            <my-button class="nav-bar__item" @click="$router.push('/employee')">{{ namePage[lang].employee }}</my-button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            namePage: {
                en: {
                    home: 'News',
                    about: 'About',
                    documents: 'documents',
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
            }
        }
    },
    props: {
        lang: {
            type: String,
            default: 'ua'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
    .nav-bar {
        @include dflex(flex-end, center);
        margin: 0 0 0 20px;
    }
    .nav-bar__item {
        margin: 0 60px 0 0;
        font-weight: 700;
        &::after {
            content: '';
                display: block;
                width: 0;
                height: 2px;
                background: $colordarkblue;
                transition: width .3s;
        }
        &:hover::after {
            width: 50%;
        }
    }
</style>