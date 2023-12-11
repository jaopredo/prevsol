<script setup>
    const slides = inject('slide')
    const calendars = inject('calendar')
    const links = inject('link')

    const showSlides = ref(slides.value.length>0)
    const showCalendars = ref(calendars.value.length>0)
    const showLinks = ref(links.value.length>0)
    
    watch(() => slides.value, (newSlides) => {
        showSlides.value = true
    })

    watch(() => calendars.value, (newCalendars) => {
        showCalendars.value = true
    })

    watch(() => links.value, (newLinks) => {
        showLinks.value = true
    })
</script>

<template>
    <div>
        <LayoutPartialsSlide v-if="showSlides"/>
        <LayoutLoadingSlide v-else />

        <LayoutPartialsCalendar v-if="showCalendars"/>
        <LayoutLoadingCalendar v-else/>

        <LayoutPartialsNovelties/>

        <LayoutPartialsLinks v-if="showLinks"/>
        <LayoutLoadingLinks v-else/>
    </div>
</template>