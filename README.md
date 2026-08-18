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
