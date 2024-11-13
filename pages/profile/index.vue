<script setup lang="ts">

const { $gsap, $ScrollTrigger } = useNuxtApp();

const panel1 = ref(null);

onMounted(() => {
    $gsap.to(panel1.value, {
        scrollTrigger: {
            trigger: panel1.value,
            start: "top top",
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            markers: true, // 開発時はtrueにして動作を確認
            onEnter: () => {
                console.log('要素がビューポートに入った');
            },
            onLeave: () => {
                console.log('要素がビューポートから出た');
            },
            onEnterBack: () => {
                console.log('要素が逆方向からビューポートに入った');
            },
        }
    });
});


</script>

<template>
    <div class="panelArea w-[100%] h-[500vh] relative overflow-hidden z-[2]">
        <!-- 要素1 -->
        <div ref="panel1" class="panel1 w-[100%] h-[calc(100vh-43px)] bg-green-100 top-0 left-0 z-[3]"><span class="text-black">1</span></div>
        <!-- 要素2 -->
        <div ref="panel2" class="panel2 w-[100%] h-[calc(100vh-43px)] bg-blue-100 top-0 left-0 z-[4]"><span class="text-black">2</span></div>
    </div>
</template>







<!-- <script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp();

let panels = ref<HTMLElement[]>([]);
let tops = ref<any[]>([]);

onMounted(async () => {
    await nextTick();

    // 全てのパネルを配列として取得
    panels.value = $gsap.utils.toArray('.panel') as HTMLElement[];

    // パネル位置を更新
    updatePanelPositions();

    // 各パネルのスクロールトリガーの設定（固定ピンの設定）
    panels.value.forEach(panel => {
        $ScrollTrigger.create({
            trigger: panel,
            start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
            pin: true,
            pinSpacing: false
        });
    });

    // スナップスクロールの設定
    $ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
                // 現在のスクロール位置を取得
                const scrollPos = window.scrollY;
                console.log("Current scroll position:", scrollPos);

                // snapTo を呼び出して最も近い位置を取得
                const snapScroll = $gsap.utils.snap(tops.value, scrollPos);
                console.log("snapScroll:", snapScroll);

                // 誤差を丸める
                return Math.round($gsap.utils.normalize(0, $ScrollTrigger.maxScroll(window), snapScroll));
            },
            duration: 0.5
        }
    });

    // ScrollTriggerの設定を更新（レスポンシブ対応等）
    $ScrollTrigger.refresh();

    // スクロール位置を監視してtopsを動的に更新
    window.addEventListener('scroll', updatePanelPositions);
});

// パネル位置を更新する関数
function updatePanelPositions() {
    // パネルの位置を getBoundingClientRect を使って動的に計算
    tops.value = panels.value.map(panel => panel.getBoundingClientRect().top + window.scrollY);
    console.log("Updated panel positions:", tops.value);
}


</script>

<template>
    <div class="panelArea w-[100%] h-[100vh] relative overflow-hidden">
        <div class="panel w-[100%] h-[100vh] bg-_lRed absolute top-0 left-0"><span class="text-black">1</span></div>
        <div class="panel w-[100%] h-[100vh] bg-_lBlue absolute top-0 left-0"><span class="text-black">2</span></div>
        <div class="panel w-[100%] h-[100vh] bg-_lGreen absolute top-0 left-0"><span class="text-black">3</span></div>
        <div class="panel w-[100%] h-[100vh] bg-_lYellow absolute top-0 left-0"><span class="text-black">4</span></div>
        <div class="panel w-[100%] h-[100vh] bg-_lPurple absolute top-0 left-0"><span class="text-black">5</span></div>
    </div>
</template>

<style>

.panelArea {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.panel {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

</style> -->