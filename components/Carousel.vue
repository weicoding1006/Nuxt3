<template>
    <div class="relative overflow-hidden">
        <div class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentSlide * 100}%)`, transitionDuration: transitioning ? '500ms' : '0ms' }"
            @transitionend="handleTransitionEnd">
            <div v-for="(slide, index) in displayedSlides" :key="index" class="min-w-full">
                <img :src="slide" alt="Slide Image" class="w-full object-cover h-screen" />
            </div>
        </div>
        <button @click="prevSlide"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">
            &lt;
        </button>
        <button @click="nextSlide"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2">
            &gt;
        </button>
        <!-- {{ displayedSlides }} -->
    </div>
</template>
  
<script setup>
const props = defineProps({
    imgData:Array
})

const currentSlide = ref(1); // 主要從中間的slide開始
const transitioning = ref(false);

const displayedSlides = computed(() => {
    return [props.imgData[props.imgData.length - 1], ...props.imgData, props.imgData[0]];
});



function prevSlide() {
    if (transitioning.value) return;
    currentSlide.value -= 1;
    transitioning.value = true;
};

function nextSlide() {
    if (transitioning.value) return;
    currentSlide.value += 1;
    transitioning.value = true;
};

function handleTransitionEnd() {
    if (currentSlide.value === 0) {
        currentSlide.value = props.imgData.length;
        transitioning.value = false;
    } else if (currentSlide.value === props.imgData.length + 1) {
        currentSlide.value = 1;
        transitioning.value = false;
    } else {
        transitioning.value = false;
    }
};
</script>
  
<style scoped>
.transition-none {
    transition: none;
}
</style>
  