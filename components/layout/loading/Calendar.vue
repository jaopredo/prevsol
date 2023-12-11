<template>
	<section class="calendar-section">
        <ul class="w-fit h-full flex items-center p-3 gap-5 animate-pulse">
            <li class="calendar" v-for="item of [1, 2, 3, 4, 5]">
                <header class="
                    rounded-t-md
                    w-full
                    h-12
                    bg-emerald-700
                    flex items-center
                    text-white text-lg font-bold
                    pl-3
                ">
                	<h1 class="bg-emerald-900 h-7 w-32 rounded-md"></h1>
                </header>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>

.calendar {
    @apply transition-all
        hover:z-10
        bg-white
        shadow-md
        h-full
        w-[300px]
        max-h-[300px]
        relative
        rounded-t-md
        flex flex-col items-stretch
        pb-3;
}

.calendar-section {
    @apply
        md:h-[60vh]
        h-[38vh]
        w-full overflow-hidden
        min-w-full
        bg-gray-100
        mt-10
        pl-5;

    box-shadow: inset 5px 5px 10px #c9c9c9,
    inset -5px -5px 10px #ffffff;
}

</style>