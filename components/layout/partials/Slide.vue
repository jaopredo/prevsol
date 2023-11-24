<script setup>
import APICONFIG from '~/config/api'


/* REFS QUE VOU UTILIZAR */
const slides = inject('slide')
const carrouselConfig = ref({
    loaded: true,
    current: {
        index: 0,
        slide: slides.value[0]
    },
    length: slides.value.length,
    slides: slides.value
})
const carrouselRef = ref(null)


/* FUNÇAO QUE AUMENTA O VALOR DO INDEX SEMPRE */
setInterval(()=>{
    const { current: { index }, length } = carrouselConfig.value

    if (length) {
        carrouselConfig.value.current.index = index==length-1?0:index+1
    }
}, 5000)

watch(() => carrouselConfig.value.current.index, () => {
    const actualWidth = window.innerWidth
    const { current: { index } } = carrouselConfig.value
    
    if (carrouselRef.value) {
        carrouselRef.value.style.transform = `translateX(-${(index) * actualWidth}px)`
    }
})

/* SE EU CLICAR NO BOTÃO DIREITO E ESQUERDO */
function onRightClick() {
    const { current: { index }, length } = carrouselConfig.value
    console.log(carrouselConfig.value)
    if (index < length-1) {
        carrouselConfig.value.current.index += 1
    }
}
function onLeftClick() {
    const { current: { index } } = carrouselConfig.value
    if (index > 0) {
        carrouselConfig.value.current.index -= 1
    }
}


</script>

<template>
    <section>
        <div class="md:h-[60vh] h-[50vw] w-full relative">
            <ul v-if="carrouselConfig.loaded" ref="carrouselRef" class="slides-container">
                <li v-for="slide of carrouselConfig.slides" class="slide" :style="{
                    backgroundImage: `url(${APICONFIG.url}/files/${slide.image})`,
                }"><NuxtLink :to="slide.url" target="_blank" class="text-container-container">
                    <div class="text-container">
                        <h1>{{ slide.name }}</h1>
                        <p>{{ slide.description }}</p>
                    </div>
                </NuxtLink></li>
            </ul>
            <button @click="onLeftClick" type="button" class="change-button md:left-4 left-0 bottom-1/2 translate-y-1/2">
                <Icon name="iconamoon:arrow-left-2-bold" size="2em" />
            </button>
            <button @click="onRightClick" type="button" class="change-button md:right-4 right-0 top-1/2 -translate-y-1/2">
                <Icon name="iconamoon:arrow-right-2-bold" size="2em" />
            </button>
        </div>
        <ul class="flex items-center justify-center gap-3 mt-3">
            <li v-for="[ index ] of carrouselConfig.slides.entries()" :class="
                'rounded-full w-2 h-2 bg-emerald-600 transition-all ' +
                (carrouselConfig.current.index == index ? 'scale-125' : '')
            ">
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/queries";

.text-container-container {
    @apply block bg-black/60 w-full h-full text-white relative;
}
.text-container {
    @apply absolute left-8 bottom-7;

    & h1 {
        @apply md:text-5xl text-[5vw] font-bold tracking-wider;
    }
    & p {
        @apply md:text-lg text-[3.4vw];
    }
}


.change-button {
    @include queries.pc {
        @apply hover:bg-black/20 active:bg-black/40;
    }

    @apply text-white flex items-center justify-center absolute rounded-full
}

.slides-container {
    @apply flex items-center w-fit h-full transition-all;
}

.slide {
    @apply h-full w-screen bg-no-repeat bg-cover;
}

</style>