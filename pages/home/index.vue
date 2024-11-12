<script setup lang="ts">

const { $gsap , $ScrollTrigger } = useNuxtApp();

// -----
// ライフサイクルフック
// -----

    onMounted(() => {
        nextTick(() => {
            welcomeImg1Handler();
        });
    });

// -----
// Topでのアニメーション
// -----

    const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        $gsap.to(".circle", {
            x: mouseX,
            y: mouseY,
            stagger: -0.5,
        });
    };

// -----
// 簡単自己紹介での画像のアニメーション
// -----
const images = ref([
    '/benjamin-chambon-F-haNd2Y500-unsplash.jpg',
    '/jason-leung-7utzACgbCdE-unsplash.jpg',
    '/tom-def-wZ4vdWc0Aug-unsplash.jpg',
]);

const currentImageIndex = ref(0);

const welcommImg1 = ref(false); // 初期状態で表示

const imagePosition = ref({
    top: 1000,
    left: 1000,
});

const imageSize = ref({
    width: 1000,
    height: 1000
});

const welcomeImg1Handler = () => {
    $ScrollTrigger.create({
        trigger: '.welcomImg1',
        start: 'bottom bottom',
        end: 'bottom bottom',
        onEnter: () => {
            console.log("start開始");
            welcommImg1.value = true; // スクロールで画像を表示
            const imgElement = document.querySelector('.welcomImg1');
            if (imgElement) {
                const rect = imgElement.getBoundingClientRect();
                imagePosition.value = {
                    top: rect.top,
                    left: rect.left
                };
                imageSize.value = {
                    width: rect.width,
                    height: rect.height
                };
                console.log(imageSize.value.height);
            };
        },
        onEnterBack: () => {
            console.log("start戻る");
            welcommImg1.value = false;
        },
        markers: true, // デバッグ用のマーカーを表示
    })
};

</script>

<template>
    <div class="relative w-[100%] h-[calc(100vh-43px)] bg-_blue_1 z-[2] overflow-hidden">
        <div class="absolute circle w-[1600px] h-[1600px] mt-[-315px] ml-[-315px] rounded-[50%] bg-[#5CD8FF] z-[3]"></div>
        <div class="absolute circle w-[1200px] h-[1200px] mt-[-220px] ml-[-220px] rounded-[50%] bg-[#A990BA] z-[4]"></div>
        <div class="absolute circle w-[800px] h-[800px] mt-[-100px] ml-[-100px] rounded-[50%] bg-[#FF406E] z-[5]"></div>
        <div @mousemove="handleMouseMove" class="absolute w-[100%] h-[100%] bg-white flex flex-col items-center justify-center space-y-[30px] mix-blend-screen z-[6]">
            <SvgIconsIcon class="w-[80px] h-[104px]"></SvgIconsIcon>
            <p class="text-[50px] font-bold">挑戦し続け、限界を押し広げる</p>
        </div>
        <div class="absolute w-[200px] h-[50px] top-[calc(100vh-180px)] left-[calc(100vw-300px)] z-[7]">
            <div class="relative w-[100%] h-[100%] rounded-[5px] bg-_lBlue z-[8] hover:bg-_lRed transition-all duration-500 ease-in-out">
                <div class="absolute w-[10px] h-[10px] top-[-4px] left-[-4px] bg-_lRed rounded-[10px]"></div>
                <div class="absolute w-[100%] h-[100%] flex items-center justify-center">
                    <p class="text-[20px] font-bold mt-[16px]">最新情報</p>
                </div>
            </div>
        </div>
    </div>
    <div class="w-[100%] h-[calc((100vh-43px)*3)] flex items-center justify-center">
        <div class="w-[1024px] h-[100%] flex">
            <!-- 左側 -->
            <div class="w-[50%] h-[100%]">
                <!-- こんにちは -->
                <div class="w-[100%] h-[calc(100vh-43px)] flex items-center">
                    <div class="w-[500px] space-y-[20px]">
                        <div>
                            <p class="text-[48px] font-bold">こんにちは！</p>
                        </div>
                        <div>
                            <p class="text-[20px] font-bold text-gray-500">
                                こんにちは！石川敦大と申します。<br>
                                現在、フロントエンドエンジニアとして活躍しています。コードを書くことが大好きで、常に新しい技術を学びながら、<span class="text-black">クリイティブで使いやすいウェブアプリケーションを開発</span>しています。
                            </p>
                        </div>
                        <div>
                            <p @click="navigateTo('profile')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                                プロフィールについてさらに詳しく
                            </p>
                        </div>
                    </div>
                </div>
                <!-- これまで -->
                <div class="w-[100%] h-[calc(100vh-43px)] flex items-center">
                    <div class="w-[500px] space-y-[20px]">
                        <div>
                            <p class="text-[48px] font-bold">これまで</p>
                        </div>
                        <div>
                            <p class="text-[20px] font-bold text-gray-500">
                                これまでにSES企業や個人開発で、複数のウェブアプリケーション開発プロジェクトに携わりました。<span class="text-black">UI/UXデザインに重点を置き、</span>パフォーマンスの最適化やレスポンシブデザインの導入に成功。<span class="text-black">Vue.jsやTypeScriptを使った開発がWebアプリケーションの得意</span>です。
                            </p>
                        </div>
                        <div>
                            <p @click="navigateTo('profile')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                                プロジェクトについてさらに詳しく
                            </p>
                        </div>
                    </div>
                </div>
                <!-- これまで -->
                <div class="w-[100%] h-[calc(100vh-43px)] flex items-center">
                    <div class="w-[500px] space-y-[20px]">
                        <div>
                            <p class="text-[48px] font-bold">これまで</p>
                        </div>
                        <div>
                            <p class="text-[20px] font-bold text-gray-500">
                                これまでにSES企業や個人開発で、複数のウェブアプリケーション開発プロジェクトに携わりました。<span class="text-black">UI/UXデザインに重点を置き、</span>パフォーマンスの最適化やレスポンシブデザインの導入に成功。<span class="text-black">Vue.jsやTypeScriptを使った開発がWebアプリケーションの得意</span>です。
                            </p>
                        </div>
                        <div>
                            <p @click="navigateTo('profile')" class="text-[14px] font-bold text-_lRed cursor-pointer hover:underline">
                                プロジェクトについてさらに詳しく
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右側 -->
            <div class="w-[50%] h-[100%]">
                <!-- 画像1⃣-->
                <div class="w-[100%] h-[calc(100vh-43px)] overflow-hidden flex items-center justify-center">
                    <div class="welcomImg1 w-[90%] h-[90%] mb-[150px]">
                        <img :src="images[currentImageIndex]"
                            class="w-[100%] h-[100%] object-cover"
                            :class="{'fixed': welcommImg1}"
                            :style="{
                                top: welcommImg1 ? imagePosition.top + 'px' : 'auto',
                                left: welcommImg1 ? imagePosition.left + 'px' : 'auto',
                                width: welcommImg1 ? imageSize.width + 'px' : '100%',
                                height: welcommImg1 ? imageSize.height + 'px' : 'auto'
                            }"
                        >
                    </div>
                </div>
                <!-- 画像2⃣-->

            </div>
        </div>
    </div>
</template>