# 2026 福岡聖誕叮叮噹 APP

Vercel / GitHub Pages 可直接部署的純 HTML PWA。

## 部署方式
1. 將此 ZIP 解壓縮。
2. 把所有檔案上傳到 GitHub Repository 根目錄。
3. Vercel Application Preset 選 Other。
4. Root Directory 使用 `./`。
5. Build Command / Output Directory / Install Command 不需覆寫。
6. Deploy。

本版資料直接寫在 `app.js`，不透過外部 JSON fetch，因此可避免「資料載入失敗」。


## V3 圖片整合
已加入依電子行程內容生成的福岡聖誕視覺、四日行程縮圖、飯店視覺與旅行海報。

## V4 圖片修正版
- 所有 APP 會顯示的圖片都改放在 Repository 根目錄。
- 圖片網址加入 v=4 避免舊快取。
- Service Worker 快取版本升級為 v4。
- 上傳 GitHub 時，請把 ZIP 解壓縮後「全部檔案」一起上傳，不要只上傳 index.html。
