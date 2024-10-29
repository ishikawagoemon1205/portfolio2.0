<script setup lang="ts">

// -----
// 
// -----

    const route = useRoute();

    let currentPage = route.path

    const test = () => {
        console.log(currentPage);
    }



</script>

<template>
    <div class="w-[100%] h-[40px] bg-_lRed flex justify-center">
        <div class="w-[1024px] h-[40px] pt-[5px] pb-[5px] px-[20px] flex items-end space-x-[30px] bg-_bgWhite">
            <SvgIconsIcon class="w-[20px] h-[26px]"></SvgIconsIcon>
            <div class="h-[100%] relative inline-block px-[10px]">
                <div class="absolute top-[5px]">
                    <p class="text-[12px] font-bold whitespace-nowrap" @click="test()">ホーム</p>
                    <div class="w-[100%] h-[2px] bg-_lRed"></div>
                </div>
            </div>
            <div class="h-[100%] relative inline-block px-[10px]">
                <div class="absolute top-[5px]">
                    <p class="text-[12px] font-bold whitespace-nowrap">プロフィール</p>
                    <div class="w-[100%] h-[2px] bg-_lRed"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[2px] bg-_gray_1"></div>
</template>