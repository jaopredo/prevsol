<script setup>
import { menuConfig } from "~/config/header"

const pub_types = inject('publication_type')
const servers = inject('server')

const config = ref(menuConfig)

config.value.items = config.value.items.map((item, index) => {
    if (item.id == 'publications') {
        item.submenu = {
            level: 2,
            items: pub_types.value?.map(pb_types => ({
                name: pb_types.name,
                path: `/pub_types/${pb_types.id}`
            }))
        }
        item.submenu.items.push({ name: 'Mais categorias...', path: '/pub_types' })
    }
    if (item.id == 'services') {
        item.submenu = {
            level: 2,
            items: servers.value?.map(server => ({
                name: server.name,
                path: server.url
            }))
        }
        item.submenu.items.push({ name: 'Mais serviços...', path: '/services' })
    }
    return item
})


/* RESPONSIVIDADE E ESTILIZAÇÃO */
const route = useRoute()

const isResponsiveMenuOpen = ref(false)
function handleMenuCloseButtonClick() {
    isResponsiveMenuOpen.value = !isResponsiveMenuOpen.value
}

</script>

<template>
    <button type="button" class="responsive-button" @click="handleMenuCloseButtonClick">
        <Icon name="ph:list-fill" size="2em" />
    </button>
    <div :class="'menu-container ' + (!isResponsiveMenuOpen?'hide-menu':'show-menu')">
        <button type="button" class="close-button" @click="handleMenuCloseButtonClick">
            <Icon name="material-symbols:cancel" size="1.7em" />
        </button>
        <figure class="logo-icon">
            <img src="/images/prevsol-2-logo.png" alt="Logo prevsol">
        </figure>
        <menu class="menu">
            <li v-for="item of config?.items" class="h-full relative">
                <NuxtLink :to="item.path || '#'" :class="
                    'menu-item relative' +
                    (route.path==item.path?' selected':'') +
                    (item.submenu?' has-submenu':'')
                ">
                    <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                    <p class="uppercase tracking-wider">{{ item.name }}</p>
                </NuxtLink>
                <LayoutPartialsSubmenu v-if="item.submenu" :config="item.submenu" />
            </li>
        </menu>
    </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries.scss";

.hide-menu {
    @include queries.pc {
        @apply translate-x-0
    }
    @apply translate-x-full
}
.show-menu {
    @apply translate-x-0;
}

.responsive-button {
    @include queries.pc {
        @apply hidden;
    }
    @apply block text-white right-4 absolute top-1/2 -translate-y-1/2;
}

.close-button {
    @include queries.pc {
        @apply hidden;
    }
    @apply block absolute right-4 top-4 text-emerald-600;
}

.logo-icon {
    @apply block p-12;
    @include queries.pc {
        @apply hidden;
    }
}

.menu {
    @include queries.pc {
        @apply items-center flex-row h-full;
    }
    @apply flex flex-col items-baseline justify-center gap-2;
}

.menu-container {
    @include queries.pc {
        @apply bg-transparent w-full h-full items-stretch gap-2 justify-center static p-0;
    }
    @apply z-10 bg-gray-100 flex flex-col h-screen fixed right-0 top-0 w-60 shadow-md gap-0 p-5 transition-all;
}


.selected {
    @include queries.pc {
        @apply bg-emerald-900 font-normal transform-none;
    }
    @apply bg-transparent font-bold scale-110;
}
.menu-item {
    @include queries.pc {
        @apply 
        text-white
        gap-1
        hover:bg-emerald-800
        active:bg-emerald-900
        h-full
        w-fit
        transition-all
        hover:transform-none;
    }
    @apply flex
        items-center
        justify-center
        p-2
        w-full
        text-emerald-700
        hover:bg-transparent
        hover:scale-125
        max-h-20
        gap-3;
}

.has-submenu {
    @apply z-30;
    &:hover > .submenu {
        @apply opacity-100 visible;
    }
}

</style>
~/config/header