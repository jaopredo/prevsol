<script setup>

const calendars = ref(inject('calendar'))

function getMonthName(date) {
    const month = (new Date(date)).getMonth()

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    return months[month]
}

</script>

<template>
    <section class="calendar-section">
        <ul class="w-fit h-full flex items-center p-3 gap-5">
            <li class="calendar" v-for="calendar of calendars">
                <NuxtLink :to="calendar.link" class="h-full w-full flex flex-col items-stretch justify-center">
                    <header class="
                        rounded-t-md
                        w-full
                        h-12
                        bg-emerald-700
                        flex items-center
                        text-white text-lg font-bold
                        uppercase                        
                        pl-3
                    ">
                        {{ getMonthName(calendar.date) }} de {{ (new Date(calendar.date)).getFullYear() }}
                    </header>
                    <h1 class="p-2 font-normal h-full bg-[#aed4cb]">{{ calendar.name }}</h1>
                    <CoreCalendar :date="calendar.date" />
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>

.calendar {
    @apply transition-all
        md:hover:scale-110
        md:active:scale-100
        active:scale-95
        hover:z-10
        hover:cursor-pointer
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
        w-full overflow-x-scroll
        min-w-full
        bg-gray-100
        mt-10
        pl-5;

    box-shadow: inset 5px 5px 10px #c9c9c9,
    inset -5px -5px 10px #ffffff;
}

</style>