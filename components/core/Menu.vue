<script setup>

const { config } = defineProps([
    'config'
])

</script>

<template>
    <menu :class="
        (config?.level>=2?'submenu':'page-menu') +
        (config?.level>2?' translate-x-full':'') +
        (config?.level==2?' top-12':'')
    ">
        <li v-for="item of config?.items" class="h-full">
            <NuxtLink v-if="item.path" :to="item.path" :class="config?.level>=2?'submenu-item':'menu-item'">
                <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                <p>{{ item.name }}</p>
            </NuxtLink>

            <div v-if="item.submenu" :class="
                'has-submenu hover:cursor-pointer relative ' +
                (config?.level>=2?'submenu-item':'menu-item')
            ">
                <Icon v-if="item.icon" :name="item.icon" size="1.3em" />
                <p>{{ item.name }}</p>
                <CoreMenu v-if="item.submenu" :config="item.submenu" />
            </div>
        </li>
    </menu>
</template>

<style lang="scss">

.page-menu {
    @apply bg-emerald-500 h-12 flex items-center justify-center gap-2;
}

.menu-item {
    @apply flex
        items-center
        justify-center
        gap-1
        text-white

        hover:bg-emerald-600
        h-full
        w-fit
        p-2
        transition-all;
}
.submenu {
    @apply absolute
        left-0
        invisible
        bg-emerald-600
        w-full
        opacity-0
        flex
        flex-col
        items-stretch
        gap-1
        transition-all
        z-10;
}
.submenu-item {
    @extend .menu-item;
    @apply hover:bg-slate-200
        font-semibold
        hover:text-emerald-800
        w-full
        justify-start
        text-sm
        z-20;
}
.has-submenu {
    @apply z-30;
    &:hover > .submenu {
        @apply opacity-100 visible;
    }
}

</style>
