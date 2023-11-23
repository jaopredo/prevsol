<script setup>

const route = useRoute()
const { config } = defineProps([
    'config'
])


const isResponsiveMenuOpen = ref(false)
function handleMenuCloseButtonClick() {
    isResponsiveMenuOpen.value = !isResponsiveMenuOpen.value
}

</script>

<template>
    <div class="w-full h-full relative">
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
                <li v-for="item of config?.items" class="h-full">
                    <NuxtLink v-if="item.path" :to="item.path" :class="
                        'menu-item' +
                        (route.path==item.path?' selected':'')
                    ">
                        <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                        <p>{{ item.name }}</p>
                    </NuxtLink>
                    <div v-if="item.submenu" class="has-submenu hover:cursor-pointer relative menu-item">
                        <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                        <p>{{ item.name }}</p>
                        <CoreMenuSubmenu v-if="item.submenu" :config="item.submenu" />
                    </div>
                </li>
            </menu>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/queries.scss";

.hide-menu {
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
        @apply items-center;
    }
    @apply flex flex-col items-baseline justify-center gap-2;
}

.menu-container {
    @include queries.pc {
        @apply w-full h-full flex items-stretch gap-2 justify-center;
    }
    @apply bg-gray-100 flex-col h-screen fixed right-0 top-0 w-60 shadow-md gap-0 p-5 transition-all;
}


.selected {
    @include queries.pc {
        @apply bg-emerald-600;
    }
    @apply bg-transparent font-bold scale-110;
}
.menu-item {
    @include queries.pc {
        @apply 
        text-white
        gap-1
        hover:bg-emerald-600
        active:bg-emerald-700
        h-full
        w-fit
        transition-all;
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
