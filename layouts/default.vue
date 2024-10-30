<script setup lang="ts">
import type { navItems } from '~/interface';

// -----
// useRouter
// -----

    const router = useRouter();

// -----
// ページが切り替わったときにナビゲーションボタンの表示が切り替わる機能
// -----

    const navItems:navItems = reactive({
        home:{
            name: "ホーム",
            path: "home",
            isEnable: true,
        },
        profile:{
            name: "プロフィール",
            path: "profile",
            isEnable: false,
        },
        projects:{
            name: "プロジェクト",
            path: "projects",
            isEnable: false,
        },
        works:{
            name: "制作物",
            path: "works",
            isEnable: false,
        },
        blog:{
            name: "ブログ",
            path: "blog",
            isEnable: false,
        },
        contact:{
            name: "お問い合わせ",
            path: "contact",
            isEnable: false,
        },
        resume:{
            name: "履歴書",
            path: "resume",
            isEnable: false,
        },
    });

    const navigateTo = (path:string):void => {
        console.log(path)
        router.push(`/${path}`);
        for(let navItem in navItems){
            navItems[navItem as keyof navItems].isEnable = navItem === path;
        };
    };


</script>

<template>
    <div class="w-[100%] h-[40px] flex justify-center">
        <div class="w-[1024px] h-[40px] pt-[5px] pb-[5px] px-[20px] flex items-end space-x-[40px] bg-_bgWhite relative"> <!-- 親要素をrelativeに設定 -->
            <SvgIconsIcon class="w-[20px] h-[26px]"></SvgIconsIcon>
            <div v-for="navItem in navItems" :key="navItem.name">
                <div class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px;">
                    <div @click="navigateTo(navItem.path)">
                        <div v-if="navItem.isEnable" class="group">
                            <div class="mt-[6px] text-[12px] text-_black font-bold whitespace-nowrap group-hover:text-_black">{{ navItem.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px] bg-_lRed"></div>
                        </div>
                        <div v-if="!navItem.isEnable" class="group">
                            <div class="text-[12px] text-_gray font-bold whitespace-nowrap group-hover:text-_black">{{ navItem.name }}</div>
                            <div class="w-[100%] h-[2px] mt-[6px] transition-colors duration-300 bg-_gray_1 group-hover:bg-_gray_2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[2px] bg-_gray_1 flex justify-center">
        <div class="w-[1024px] h-[100%]">
            <slot/>
        </div>
    </div>
</template>