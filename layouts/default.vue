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

// -----
// 虫眼鏡ボタンを押すとブログが検索機能が表示される機能
// -----

    const showSearch:Ref = ref(false);

    const enableSearch = ():void => {
        showSearch.value = !showSearch.value;
        nextTick(() => {
            document.getElementById('focusSearch')?.focus()
        });
    };


// -----
// 検索機能を閉じる機能
// -----

    const disabledSearch = ():void => {
        showSearch.value = !showSearch.value;
        searchInput.value = '';
    }

// -----
// ブログ検索機能
// -----

    const searchInput:Ref = ref('')


</script>

<template>
    <div class="w-[100%] h-[40px] z-[1000] flex justify-center fixed bg-_bgWhite"
        :class="[showSearch ? 'bg-_gray_3' : 'bg-_bgWhite']"
        >
        <div 
            v-show="!showSearch" 
            class="w-[1024px] h-[40px] pt-[5px] pb-[5px] px-[20px] flex items-end space-x-[20px] bg-_bgWhite relative transition-all duration-500 ease-in-out">
            <SvgIconsIcon class="w-[20px] h-[26px]"></SvgIconsIcon>
            <div v-for="navItem in navItems" :key="navItem.name">
                <div class="h-[100%] inline-block px-[10px] relative" style="bottom: -5px;">
                    <div @click="navigateTo(navItem.path)" class="no-pointer">
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
            <div @click="enableSearch()">
                <a-tooltip placement="bottom">
                    <template #title>
                        <span>ブログ記事検索</span>
                    </template>
                    <SvgIconsSearchIcon class="w-[20px] h-[20px] mt-[4px]"></SvgIconsSearchIcon>
                </a-tooltip>
            </div>
        </div>
        <div v-show="showSearch" class="w-[100%] h-[40px] space-x-[8px] pr-[40px] flex justify-center items-center">
            <div @click="disabledSearch()">
                <a-tooltip a-tooltip placement="bottom">
                    <template #title>
                        <span>戻る</span>
                    </template>
                    <SvgIconsBackIcon></SvgIconsBackIcon>
                </a-tooltip>
            </div>
            <div class="w-[500px] h-[30px] rounded-[4px] flex items-center bg-_white">
                <div class="w-[50px] h-[30px] flex justify-center items-center">
                    <a-tooltip placement="bottom">
                        <SvgIconsSearchIcon class="w-[20px] h-[20px]"></SvgIconsSearchIcon>
                    </a-tooltip>
                </div>
                <div class="w-[450px] h-[30px]">
                    <input v-model="searchInput" id="focusSearch" type="text" class="w-[100%] h-[100%] bg-_white outline-none" placeholder="ブログを検索">
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[1px] mt-[40px] z-[1000] flex fixed bg-_gray_2"></div>
    <div class="w-[100%] h-[41px]"></div>
    <div class="relative">
        <div v-show="showSearch" class="fixed inset-0 z-10 bg-black opacity-50"></div>
        <div class="absolute w-[100%] h-[calc(100vh-41px)] z-1">
            frefre
            <slot/>
        </div>
    </div>
</template>

<style>


</style>