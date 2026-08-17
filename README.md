# 福岡・博多聖誕市集之旅 APP V1

這是一個可直接部署到 GitHub Pages 的手機旅遊行程 Web App。

## 內容
- 首頁：旅程資訊、倒數、快捷功能
- 行程：Day 1～Day 4 時間軸
- 地圖：景點清單與 Google Maps 導航
- 收藏：想吃／想買／備忘錄
- 更多：航班、住宿、交通、花費、行李等入口
- PWA 基礎：可加入 iPhone 主畫面

## 上傳 GitHub
把這個資料夾「裡面的全部檔案」上傳到 Repository 根目錄，不要再多包一層資料夾。

根目錄應該直接看到：
- index.html
- style.css
- app.js
- manifest.webmanifest
- service-worker.js
- data/

## 開啟 GitHub Pages
Repository → Settings → Pages → Build and deployment → Deploy from a branch
Branch 選 `main`，Folder 選 `/ (root)`，Save。

## 修改資料
- `data/trip.json`：旅行名稱、日期、航班、住宿
- `data/itinerary.json`：Day 1～Day 4 行程
- `data/favorites.json`：想吃、想買、備忘錄

## 注意
目前資料中的航班與部分時間為示範內容，請依實際機票與訂房資料更新。
