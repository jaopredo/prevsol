<template>
    <nav class="sticky top-0 page-menu">
        <CoreMenu/>
    </nav>
</template>


<style lang="scss">
@use "@/assets/scss/queries.scss";

.page-menu {
    @apply bg-emerald-500 h-12 flex items-center justify-center w-full;
}
</style>