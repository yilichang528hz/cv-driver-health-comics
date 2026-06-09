# 商用車駕駛健康安全漫畫｜三語電子書藝廊

本專案是一個可直接部署於 GitHub Pages 的純靜態網站，用於展示「商用車駕駛健康安全漫畫」的首頁主視覺、角色設定圖與十個主題漫畫圖片。網站支援中文、英文、日文三語切換，並採用單張圖片電子書閱讀器設計，避免在首頁或主顯示區一次載入全部漫畫圖片。

## 1. 專案用途

本網站服務於作品集展示、商用車產品企劃提案、企業主管審閱、HR 面試閱讀、AI 應用評審觀摩，以及跨部門健康安全教育溝通。內容以駕駛人健康、行車安全、工安、營養、職業醫學與人本產品企劃為核心。

所有內容皆標示：

- Demo Dataset
- Simulated data
- Prototype Simulation
- Requires human review

## 2. 檔案結構

```text
project-root/
  index.html
  style.css
  data.js
  app.js
  README.md
  images/
    home/
      home-hero.jpg
    characters/
      00-1.jpg
      00-2.jpg
      00-3.jpg
      00-4.jpg
      00-5.jpg
    comics/
      01-1.jpg
      01-2.jpg
      02-1.jpg
      02-2.jpg
      03-1.jpg
      03-2.jpg
      04-1.jpg
      04-2.jpg
      05-1.jpg
      05-2.jpg
      06-1.jpg
      06-2.jpg
      07-1.jpg
      07-2.jpg
      08-1.jpg
      08-2.jpg
      09-1.jpg
      09-2.jpg
      10-1.jpg
      10-2.jpg
```

## 2-1. 首頁初始畫面與頂部控制

首頁採用 20/80 雙區塊：上方約 20% 為固定首頁橫幅控制板，下方約 80% 為主顯示區。初次載入時，下方只載入 `images/home/home-hero.jpg` 與 `MOTIVATION_CONTENT` 的目前語言文字，不會預先載入十個主題的漫畫圖片。

頂部控制已調整為：

- `語言 / Language / 言語` 按鈕：點選後展開中文、English、日本語選單。
- `版型 / Layout / 版型` 按鈕：點選後展開 A、B、C、D 四種版型選單。
- `創作動機 / Motivation / 制作動機` 按鈕：點選後在下方主顯示區保留首頁插圖，並展開創作動機卡片。
- `進入商用車健康與安全知識漫畫藝廊` 入口：點選後展開主題 1 至主題 10 選單；選取主題後，下方閱讀器只載入該主題目前頁面的單張 JPG。

切換語言時，網站只更新目前畫面的文字、caption、alt、版權聲明、按鈕標籤與 glossary 內容；若目前停留在首頁，不會呼叫主題渲染，也不會載入任何主題圖片。

## 3. 圖片資料夾與檔名規則

### 首頁插圖

```text
images/home/home-hero.jpg
```

### 角色設定圖

```text
images/characters/00-1.jpg
images/characters/00-2.jpg
images/characters/00-3.jpg
images/characters/00-4.jpg
images/characters/00-5.jpg
```

### 十個主題漫畫圖片

```text
images/comics/01-1.jpg
images/comics/01-2.jpg
images/comics/02-1.jpg
images/comics/02-2.jpg
images/comics/03-1.jpg
images/comics/03-2.jpg
images/comics/04-1.jpg
images/comics/04-2.jpg
images/comics/05-1.jpg
images/comics/05-2.jpg
images/comics/06-1.jpg
images/comics/06-2.jpg
images/comics/07-1.jpg
images/comics/07-2.jpg
images/comics/08-1.jpg
images/comics/08-2.jpg
images/comics/09-1.jpg
images/comics/09-2.jpg
images/comics/10-1.jpg
images/comics/10-2.jpg
```

## 4. 如何替換 JPG 圖片

1. 將首頁主視覺命名為 `home-hero.jpg`，放入 `images/home/`。
2. 將角色設定圖命名為 `00-1.jpg` 至 `00-5.jpg`，放入 `images/characters/`。
3. 將十個主題漫畫依序命名為 `01-1.jpg` 至 `10-2.jpg`，放入 `images/comics/`。
4. 不需要修改 `index.html`。
5. 若檔名與資料夾正確，網站會依 `data.js` 的 manifest 自動讀取圖片。
6. 若圖片尚未放入，閱讀器會顯示友善提示並列出應放置的相對路徑。

## 5. 如何部署到 GitHub Pages

1. 建立一個 GitHub repository。
2. 將本專案所有檔案與資料夾上傳到 repository 根目錄。
3. 進入 repository 的 Settings。
4. 開啟 Pages。
5. Source 選擇 `Deploy from a branch`。
6. Branch 選擇 `main` 或 `master`，資料夾選擇 `/root`。
7. 儲存後等待 GitHub Pages 建置完成。
8. 開啟 GitHub Pages 網址即可瀏覽。

本專案不需要 Node.js、後端、資料庫、API key 或任何外部套件。

## 6. 如何新增主題

在 `data.js` 的 `TOPIC_MANIFEST` 增加一個物件，例如：

```javascript
{
  id: "11",
  title: {
    zh: "新主題中文標題",
    en: "New Topic English Title",
    ja: "新テーマ日本語タイトル"
  },
  images: [
    {
      page: 1,
      filename: "11-1.jpg",
      src: "images/comics/11-1.jpg",
      alt: {
        zh: "新主題第1張漫畫頁",
        en: "New topic comic page 1",
        ja: "新テーマ 第1ページ"
      },
      caption: {
        zh: "新主題，第1張圖。Prototype Simulation，Requires human review。",
        en: "New topic, image 1. Prototype Simulation, requires human review.",
        ja: "新テーマ、画像1。Prototype Simulation、human review が必要。"
      },
      badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
    }
  ]
}
```

同時將對應圖片放入：

```text
images/comics/11-1.jpg
```

## 7. 如何新增 glossary

在 `data.js` 的 `GLOSSARY` 陣列增加：

```javascript
{
  term: {
    zh: "中文名詞",
    en: "English term",
    ja: "日本語用語"
  },
  desc: {
    zh: "中文說明",
    en: "English explanation",
    ja: "日本語説明"
  }
}
```

網站會自動在名詞表 modal 中呈現。

## 8. 全螢幕電子書閱讀器

閱讀器支援：

- 上一張
- 下一張
- 全螢幕
- 關閉全螢幕
- ESC 離開全螢幕
- 左右方向鍵換頁
- 手機與平板 RWD
- 瀏覽器 Fullscreen API
- CSS fallback 全螢幕模式

首頁狀態下，上一張與下一張按鈕會停用；主題或角色設定狀態下，按鈕會依頁碼自動啟用或停用。

## 9. 品牌安全與資料界線

本網站使用 generic commercial vehicles 與抽象教育展示語境。正式使用前，請再次檢查：

- 圖片內是否出現真實商標、Logo、車牌、客戶資料或專有 UI。
- 醫學、營養、工安與駕駛安全內容是否已由專業人員審閱。
- 所有示意資料是否維持 Demo Dataset、Simulated data、Prototype Simulation、Requires human review 標記。
