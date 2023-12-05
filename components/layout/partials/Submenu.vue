<script setup>

const route = useRoute()
const { config } = defineProps([
    'config'
])

</script>

<template>
    <menu :class="'submenu' +
        (config?.level>2?' translate-x-full':'') +
        (config?.level==2?' top-12':'')
    ">
        <li v-for="item of config?.items" class="h-full flex w-full">
            <NuxtLink v-if="item.path" :to="item.path" :class="
                'submenu-item' +
                (route.path==item.path?' selected':'')
            ">
                <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                <p>{{ item.name }}</p>
            </NuxtLink>

            <div v-if="item.submenu" class="has-submenu hover:cursor-pointer relative submenu-item">
                <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                <p>{{ item.name }}</p>
                <LayoutPartialsSubmenu v-if="item.submenu" :config="item.submenu" />
            </div>
        </li>
    </menu>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries.scss";

.submenu {
    @include queries.pc {
        @apply absolute
        left-0
        invisible
        bg-emerald-800
        opacity-0
        flex
        flex-col
        items-stretch

        min-w-fit
        gap-1
        transition-all
        z-10
        
        hover:visible
        hover:opacity-100;
    }
    @apply hidden;
}
.submenu-item {
    @apply hover:bg-slate-200
        font-semibold
        hover:text-emerald-900
        text-white
        justify-start

        w-full
        text-sm
        z-20
        p-1;
}
.has-submenu {
    @apply z-30;
    &:hover + .submenu {
        @apply opacity-100 visible;
    }
}

</style>