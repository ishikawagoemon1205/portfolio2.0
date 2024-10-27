<template>
  <!-- スマートフォンで表示しているときに、画面を表示する -->
  <div class="block lg:hidden font-Kosugi w-screen h-screen bg-_lBlue">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
  <!-- スマートフォン以外で表示しているとき、エラー文章を表示する -->
  <div class="hidden lg:block font-Kosugi">
    <div class="relative w-screen h-screen">
      <div class="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <a-result status="warning" title="このサービスはPCでは利用できず、スマートフォン専用です。"></a-result>
      </div>
    </div>
  </div>
</template>

<style>

.font-Kosugi {
  font-family: "Kosugi", sans-serif;
}

</style>
