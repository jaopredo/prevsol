<template>
    <nav class="sticky top-0 page-menu z-50">
        <h1 class="text-white font-bold pl-2 md:hidden">Bem-vindo(a) ao site do PREVSOL</h1>
        <LayoutPartialsMenu/>
    </nav>
</template>


<style lang="scss">
@use "@/assets/scss/queries.scss";

.page-menu {
    @apply bg-emerald-700 h-12 flex items-center justify-between w-full;
}
</style>