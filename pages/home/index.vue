<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

const test = () => {
  console.log("テスト1: スクロールイベントが発火しました");
};

onMounted(() => {
  if (process.client && typeof window !== "undefined") {
    console.log("テスト4: クライアントサイドでonMounted内");
    window.addEventListener("scroll", test);
  }
});

onBeforeUnmount(() => {
  if (process.client && typeof window !== "undefined") {
    window.removeEventListener("scroll", test);
    console.log("テスト2: イベントリスナー削除");
  }
});
</script>

<template>
  <div class="w-[100%] h-[200vh]"> <!-- ページの高さを2倍にしてスクロール可能に -->
    <div class="testbox w-[100px] h-[100px] bg-_lRed"></div>
  </div>
  <div class="w-[100%] h-[calc(100vh-41px)]">スクロールしてテストしてください</div>
</template>
