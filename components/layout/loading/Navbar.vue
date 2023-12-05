<template>
	<nav class="sticky top-0 page-menu z-50 ">
		<div class="border-t-2 border-t-white rounded-full animate-spin w-10 h-10 p-3"></div>
	</nav>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries.scss";

.page-menu {
    @apply bg-emerald-700 h-12 flex items-center justify-center w-full;
}
</style>