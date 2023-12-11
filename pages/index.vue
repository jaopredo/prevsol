<script setup>
    const slides = inject('slide')
    const calendars = inject('calendar')

    const showSlides = ref(slides.value.length>0?true:false)
    const showCalendars = ref(calendars.value.length>0?true:false)

    watch(() => slides.value, (newSlides) => {
        showSlides.value = true
    })

    watch(() => calendars.value, (newCalendars) => {
        showCalendars.value = true
    })
</script>

<template>
    <div>
        <LayoutPartialsSlide v-if="showSlides"/>
        <LayoutLoadingSlide v-else />

        <LayoutPartialsCalendar v-if="showCalendars"/>
        <LayoutLoadingCalendar v-else/>

        <LayoutStructureSectionsNovelties/>
        <LayoutStructureSectionsUsefulLinks/>
    </div>
</template>