<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

const panel1 = ref(null);
const panel2 = ref(null);
const panel3 = ref(null);
const panel4 = ref(null);
const panel5 = ref(null);
const panel6 = ref(null);
const panel7 = ref(null);
const panel8 = ref(null);

onMounted(() => {
    nextTick(() => {
        // panel1 の設定
        $gsap.to(panel1.value, {
            scrollTrigger: {
                trigger: panel1.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: true,
            }
        });
        
        // panel2 の設定
        $gsap.to(panel2.value, {
            scrollTrigger: {
                trigger: panel2.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: true,
            }
        });

        // panel3 の設定
        $gsap.to(panel3.value, {
            scrollTrigger: {
                trigger: panel3.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: true,
            }
        });

        // panel4 の設定
        $gsap.to(panel4.value, {
            scrollTrigger: {
                trigger: panel4.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: true,
            }
        });

        // panel5 の設定
        $gsap.to(panel5.value, {
            scrollTrigger: {
                trigger: panel5.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: true,
            }
        });

        // panel6 の設定
        $gsap.to(panel6.value, {
            scrollTrigger: {
                trigger: panel6.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: true,
            }
        });

        // panel7 の設定
        $gsap.to(panel7.value, {
            scrollTrigger: {
                trigger: panel7.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
                markers: true,
            }
        });

        // panel8 の設定
        $gsap.to(panel8.value, {
            scrollTrigger: {
                trigger: panel8.value,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                markers: true,
            }
        });
    });
});
</script>

<template>
    <div class="w-[100%] h-auto relative">
        <div ref="panel1" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[10] flex items-center justify-center absolute">
            <span class="text-[100px]">aaaaa</span>
        </div>
        <div ref="panel2" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[11] flex items-center justify-center absolute top-[calc(100vh-43px)]">
            <span class="text-[100px]">bbbbb</span>
        </div>
        <div ref="panel3" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[12] flex items-center justify-center absolute top-[calc((100vh-43px)*2)]">
            <span class="text-[100px]">cccccc</span>
        </div>
        <div ref="panel4" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[13] flex items-center justify-center absolute top-[calc((100vh-43px)*3)]">
            <span class="text-[100px]">dddddd</span>
        </div>
        <div ref="panel5" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[14] flex items-center justify-center absolute top-[calc((100vh-43px)*4)]">
            <span class="text-[100px]">eeeee</span>
        </div>
        <div ref="panel6" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[15] flex items-center justify-center absolute top-[calc((100vh-43px)*5)]">
            <span class="text-[100px]">fffff</span>
        </div>
        <div ref="panel7" class="w-full h-[calc(100vh-43px)] bg-blue-100 z-[16] flex items-center justify-center absolute top-[calc((100vh-43px)*6)]">
            <span class="text-[100px]">ggggg</span>
        </div>
        <div ref="panel8" class="w-full h-[calc(100vh-43px)] bg-red-100 z-[17] flex items-center justify-center absolute top-[calc((100vh-43px)*7)]">
            <span class="text-[100px]">hhhhh</span>
        </div>
    </div>
</template>
