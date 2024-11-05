export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const handleScroll = () => {
        console.log("スクロールイベントが発火しました");
      };
  
      // クライアントサイドでスクロールイベントを設定
      window.addEventListener("scroll", handleScroll);
  
      // ページが離れた際のクリーンアップ
      nuxtApp.hook("app:unmount", () => {
        window.removeEventListener("scroll", handleScroll);
        console.log("スクロールイベントが解除されました");
      });
    }
  });
  