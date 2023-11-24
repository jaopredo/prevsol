<script setup>

const { date } = defineProps([
    'date'
])


const calendarMatrix = ref([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
])
const calendarDate = ref(new Date(date))

const month = calendarDate.value.getMonth()
const year = calendarDate.value.getFullYear()
const weekDay = new Date(year, month, 1).getDay()
const maxDays = new Date(year, month, 0).getDate()

async function populateCalendarMatrix() {
    let counter = 0
    calendarMatrix.value.forEach((week, index) => {
        week.forEach((dayWeek, dayWeekIndex) => {
            if (counter <= maxDays) {
                if (index == 0) {
                    if (dayWeekIndex >= weekDay) {
                        counter += 1
                        calendarMatrix.value[index][dayWeekIndex] = counter
                    }
                } else {
                    counter += 1
                    calendarMatrix.value[index][dayWeekIndex] = counter
                }
            }
        })
    })
}

Promise.resolve(populateCalendarMatrix())
</script>

<template>
    <div class="calendar-container">
        <table>
            <thead>
                <tr>
                    <th class="text-rose-700">Dom</th>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                    <th>Sáb</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="week of calendarMatrix">
                    <td v-for="[idx, day] of week.entries()"
                        :class="
                            (idx==0?'text-rose-700 ':'') +
                            (day-1==calendarDate.getDate() ? 'selected-day ':'')
                        "
                    > {{ day==0 ? '' : day }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>

.selected-day {
    @apply bg-emerald-700 text-white font-bold rounded-full;
}

table {

    th {
        @apply text-xs text-center;
    }

    td {
        @apply text-center;
    }
}

.calendar-container {
    @apply flex-grow flex flex-col items-stretch justify-end;
}

</style>