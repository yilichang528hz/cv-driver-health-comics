const HOME_IMAGE = {
  src: "images/home/home-hero.jpg",
  alt: {
    zh: "商用車駕駛健康安全漫畫首頁主視覺",
    en: "Hero visual for Commercial Vehicle Driver Health and Safety Comics",
    ja: "商用車ドライバー健康安全漫画のホームビジュアル"
  },
  caption: {
    zh: "首頁主視覺，整合十個健康安全主題。Prototype Simulation，Requires human review。",
    en: "Home hero visual integrating ten health and safety themes. Prototype Simulation, requires human review.",
    ja: "10の健康安全テーマを統合したホームビジュアル。Prototype Simulation、human review が必要。"
  },
  badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
};

const CHARACTER_IMAGES = [
  { page: 1, src: "images/characters/00-1.jpg", filename: "00-1.jpg" },
  { page: 2, src: "images/characters/00-2.jpg", filename: "00-2.jpg" },
  { page: 3, src: "images/characters/00-3.jpg", filename: "00-3.jpg" },
  { page: 4, src: "images/characters/00-4.jpg", filename: "00-4.jpg" },
  { page: 5, src: "images/characters/00-5.jpg", filename: "00-5.jpg" }
];

const MOTIVATION_CONTENT = {
  zh: `這個專案以商用車產品企劃的視角出發，將駕駛人的健康管理、行車安全教育與車隊風險意識，整理成一套可閱讀、可展示、也便於跨部門溝通的漫畫型知識藝廊。台灣的道路環境、物流節奏、城際運輸與高齡化社會議題，讓駕駛人的疲勞、姿勢負荷、慢性病風險、分心駕駛、裝卸貨工安與出車前檢查，都成為產品規劃、服務設計與用戶關懷的重要延伸。本作品希望用溫暖而專業的方式，把醫學、營養、工安與駕駛情境轉化成更容易理解的內容，協助企業、HR、主管與評審看見商用車價值鏈中的人本面向。`,
  en: `This project is developed from a commercial vehicle product planning perspective and translates driver health, road safety education, and fleet risk awareness into a comic based knowledge gallery that is readable, presentable, and useful for cross functional communication. In Taiwan, road conditions, logistics rhythms, intercity transport, and an aging society all shape the importance of fatigue management, posture care, chronic disease awareness, distracted driving prevention, loading safety, and pre trip inspection. Through a warm and professional narrative, this work turns medical, nutritional, occupational safety, and driving related knowledge into accessible visual content so that companies, HR teams, managers, and reviewers can better understand the human side of the commercial vehicle value chain.`,
  ja: `本プロジェクトは、商用車の商品企画という視点から出発し、ドライバーの健康管理、走行安全教育、フリートのリスク意識を、読みやすく提示しやすい漫画型ナレッジギャラリーとして再構成したものです。台湾の道路環境、物流のリズム、都市間輸送、高齢化社会の進行は、疲労管理、姿勢負担、慢性疾患リスク、わき見運転の予防、荷役時の安全、出発前点検の重要性をいっそう高めています。本作品では、医学、栄養学、労働安全、運転場面の知識を、温かさと専門性を備えた視覚表現へと整理し、企業、HR、管理職、審査担当者が、商用車の価値連鎖における人間中心の視点をより深く理解できるよう支援します。`
};

const UI_TEXT = {
  zh: {
    siteTitle: "商用車駕駛健康安全漫畫",
    siteSubtitle: "三語電子書藝廊｜產品企劃、駕駛健康、工安教育與跨部門溝通原型",
    copyright: "著作權所有 © 2026 張義豊(Yi-Li, Chang) 保留所有權利。",
    home: "首頁",
    motivation: "創作動機",
    characters: "角色設定",
    expand: "展開",
    collapse: "收合",
    readerEyebrowHome: "Home Gallery",
    readerEyebrowTopic: "Ebook Reader",
    readerEyebrowCharacters: "Character Bible",
    homeTitle: "首頁主視覺與創作動機",
    homeSummary: "初始畫面只載入首頁插圖與創作動機，主題漫畫會在點選後依頁碼單張載入。",
    charactersTitle: "角色設定與一致性提示詞",
    charactersSummary: "五張角色設計圖以單張電子書形式閱讀，便於後續替換 JPG 與檢查角色一致性。",
    topicSummary: "本主題以兩張漫畫頁呈現，閱讀器每次只載入目前頁面圖片。",
    prev: "上一張",
    next: "下一張",
    fullscreen: "全螢幕",
    exitFullscreen: "關閉全螢幕",
    page: "頁",
    noPage: "首頁",
    missingImage: "圖片尚未放入指定資料夾。\n請將 JPG 放到：",
    floatingToggle: "目錄",
    floatingLanguageTitle: "語言切換",
    floatingCatalogTitle: "目錄",
    glossaryOpen: "名詞表",
    glossaryEyebrow: "Glossary",
    glossaryTitle: "三語名詞表",
    languageButton: "語言",
    themeButton: "版型",
    galleryEntry: "進入商用車健康與安全知識漫畫藝廊",
    topicPrefix: "主題",
    characterCaptionPrefix: "角色設定圖",
    prototypeNote: "Prototype Simulation，Requires human review。",
    collapseHeader: "收合導覽",
    expandHeader: "展開導覽",
    zoomOut: "縮小",
    zoomIn: "放大",
    resetZoom: "100%",
    fitWidth: "適合寬度",
    immersiveMode: "沉浸閱讀",
    exitImmersiveMode: "返回一般閱讀"
  },
  en: {
    siteTitle: "Commercial Vehicle Driver Health and Safety Comics",
    siteSubtitle: "Trilingual ebook gallery for product planning, driver health, workplace safety education, and cross functional communication.",
    copyright: "Copyright © 2026 張義豊(Yi-Li, Chang) All Rights Reserved.",
    home: "Home",
    motivation: "Motivation",
    characters: "Characters",
    expand: "Expand",
    collapse: "Collapse",
    readerEyebrowHome: "Home Gallery",
    readerEyebrowTopic: "Ebook Reader",
    readerEyebrowCharacters: "Character Bible",
    homeTitle: "Home Hero and Project Motivation",
    homeSummary: "The initial screen loads only the home hero and motivation text. Topic comics are loaded one page at a time after selection.",
    charactersTitle: "Character Design and Consistency Guide",
    charactersSummary: "Five character design images are displayed through the single image ebook reader for later JPG replacement and consistency review.",
    topicSummary: "This topic is presented in two comic pages. The reader loads only the current page image.",
    prev: "Previous",
    next: "Next",
    fullscreen: "Full Screen",
    exitFullscreen: "Exit Full Screen",
    page: "Page",
    noPage: "Home",
    missingImage: "The image has not been placed in the target folder.\nPlease add the JPG at:",
    floatingToggle: "Menu",
    floatingLanguageTitle: "Language",
    floatingCatalogTitle: "Catalog",
    glossaryOpen: "Glossary",
    glossaryEyebrow: "Glossary",
    glossaryTitle: "Trilingual Glossary",
    languageButton: "Language",
    themeButton: "Layout",
    galleryEntry: "Enter the Commercial Vehicle Health and Safety Comic Gallery",
    topicPrefix: "Topic",
    characterCaptionPrefix: "Character design image",
    prototypeNote: "Prototype Simulation, requires human review.",
    collapseHeader: "Collapse nav",
    expandHeader: "Expand nav",
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    resetZoom: "100%",
    fitWidth: "Fit width",
    immersiveMode: "Immersive reader",
    exitImmersiveMode: "Exit immersive"
  },
  ja: {
    siteTitle: "商用車ドライバー健康安全漫画",
    siteSubtitle: "商品企画、ドライバー健康、労働安全教育、部門横断コミュニケーションのための三語電子書ギャラリー。",
    copyright: "著作権所有 © 2026 張義豊(Yi-Li, Chang) 無断転載を禁じます。",
    home: "ホーム",
    motivation: "制作動機",
    characters: "キャラクター設定",
    expand: "展開",
    collapse: "折りたたむ",
    readerEyebrowHome: "Home Gallery",
    readerEyebrowTopic: "Ebook Reader",
    readerEyebrowCharacters: "Character Bible",
    homeTitle: "ホームビジュアルと制作動機",
    homeSummary: "初期画面ではホームビジュアルと制作動機のみを読み込みます。各テーマの漫画は選択後に1ページずつ読み込みます。",
    charactersTitle: "キャラクターデザインと一貫性ガイド",
    charactersSummary: "5枚のキャラクター設定画像を単一画像の電子書リーダーで表示し、後から JPG を差し替えて確認できます。",
    topicSummary: "このテーマは2ページ構成です。リーダーは現在のページ画像だけを読み込みます。",
    prev: "前へ",
    next: "次へ",
    fullscreen: "全画面",
    exitFullscreen: "全画面を閉じる",
    page: "ページ",
    noPage: "ホーム",
    missingImage: "画像はまだ指定フォルダに配置されていません。\nJPG を次の場所に追加してください：",
    floatingToggle: "目次",
    floatingLanguageTitle: "言語切替",
    floatingCatalogTitle: "目次",
    glossaryOpen: "用語集",
    glossaryEyebrow: "Glossary",
    glossaryTitle: "三語用語集",
    languageButton: "言語",
    themeButton: "版型",
    galleryEntry: "商用車健康安全漫画ギャラリーに入る",
    topicPrefix: "テーマ",
    characterCaptionPrefix: "キャラクター設定画像",
    prototypeNote: "Prototype Simulation、human review が必要。",
    collapseHeader: "ナビを閉じる",
    expandHeader: "ナビを開く",
    zoomOut: "縮小",
    zoomIn: "拡大",
    resetZoom: "100%",
    fitWidth: "幅に合わせる",
    immersiveMode: "没入読書",
    exitImmersiveMode: "通常表示へ"
  }
};

const TOPIC_MANIFEST = [
  {
    id: "01",
    title: { zh: "疲勞駕駛與睡眠", en: "Fatigue, Drowsiness and Sleep", ja: "疲労運転と睡眠" },
    images: [
      {
        page: 1,
        filename: "01-1.jpg",
        src: "images/comics/01-1.jpg",
        alt: {
          zh: "疲勞駕駛與睡眠第1張漫畫頁",
          en: "Fatigue, Drowsiness and Sleep comic page 1",
          ja: "疲労運転と睡眠 第1ページ"
        },
        caption: {
          zh: "疲勞駕駛與睡眠，第1張圖。Prototype Simulation，Requires human review。",
          en: "Fatigue, Drowsiness and Sleep, image 1. Prototype Simulation, requires human review.",
          ja: "疲労運転と睡眠、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "01-2.jpg",
        src: "images/comics/01-2.jpg",
        alt: {
          zh: "疲勞駕駛與睡眠第2張漫畫頁",
          en: "Fatigue, Drowsiness and Sleep comic page 2",
          ja: "疲労運転と睡眠 第2ページ"
        },
        caption: {
          zh: "疲勞駕駛與睡眠，第2張圖。Prototype Simulation，Requires human review。",
          en: "Fatigue, Drowsiness and Sleep, image 2. Prototype Simulation, requires human review.",
          ja: "疲労運転と睡眠、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "02",
    title: { zh: "久坐、腰背痛與脊椎保養", en: "Prolonged Sitting, Back Care and Posture", ja: "長時間座位、腰背部痛と脊椎ケア" },
    images: [
      {
        page: 1,
        filename: "02-1.jpg",
        src: "images/comics/02-1.jpg",
        alt: {
          zh: "久坐、腰背痛與脊椎保養第1張漫畫頁",
          en: "Prolonged Sitting, Back Care and Posture comic page 1",
          ja: "長時間座位、腰背部痛と脊椎ケア 第1ページ"
        },
        caption: {
          zh: "久坐、腰背痛與脊椎保養，第1張圖。Prototype Simulation，Requires human review。",
          en: "Prolonged Sitting, Back Care and Posture, image 1. Prototype Simulation, requires human review.",
          ja: "長時間座位、腰背部痛と脊椎ケア、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "02-2.jpg",
        src: "images/comics/02-2.jpg",
        alt: {
          zh: "久坐、腰背痛與脊椎保養第2張漫畫頁",
          en: "Prolonged Sitting, Back Care and Posture comic page 2",
          ja: "長時間座位、腰背部痛と脊椎ケア 第2ページ"
        },
        caption: {
          zh: "久坐、腰背痛與脊椎保養，第2張圖。Prototype Simulation，Requires human review。",
          en: "Prolonged Sitting, Back Care and Posture, image 2. Prototype Simulation, requires human review.",
          ja: "長時間座位、腰背部痛と脊椎ケア、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "03",
    title: { zh: "血糖、血壓與心血管風險", en: "Blood Sugar, Blood Pressure and Cardiovascular Risk", ja: "血糖、血圧と心血管リスク" },
    images: [
      {
        page: 1,
        filename: "03-1.jpg",
        src: "images/comics/03-1.jpg",
        alt: {
          zh: "血糖、血壓與心血管風險第1張漫畫頁",
          en: "Blood Sugar, Blood Pressure and Cardiovascular Risk comic page 1",
          ja: "血糖、血圧と心血管リスク 第1ページ"
        },
        caption: {
          zh: "血糖、血壓與心血管風險，第1張圖。Prototype Simulation，Requires human review。",
          en: "Blood Sugar, Blood Pressure and Cardiovascular Risk, image 1. Prototype Simulation, requires human review.",
          ja: "血糖、血圧と心血管リスク、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "03-2.jpg",
        src: "images/comics/03-2.jpg",
        alt: {
          zh: "血糖、血壓與心血管風險第2張漫畫頁",
          en: "Blood Sugar, Blood Pressure and Cardiovascular Risk comic page 2",
          ja: "血糖、血圧と心血管リスク 第2ページ"
        },
        caption: {
          zh: "血糖、血壓與心血管風險，第2張圖。Prototype Simulation，Requires human review。",
          en: "Blood Sugar, Blood Pressure and Cardiovascular Risk, image 2. Prototype Simulation, requires human review.",
          ja: "血糖、血圧と心血管リスク、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "04",
    title: { zh: "路上的營養學", en: "Smart Nutrition on the Road", ja: "移動中のスマート栄養" },
    images: [
      {
        page: 1,
        filename: "04-1.jpg",
        src: "images/comics/04-1.jpg",
        alt: {
          zh: "路上的營養學第1張漫畫頁",
          en: "Smart Nutrition on the Road comic page 1",
          ja: "移動中のスマート栄養 第1ページ"
        },
        caption: {
          zh: "路上的營養學，第1張圖。Prototype Simulation，Requires human review。",
          en: "Smart Nutrition on the Road, image 1. Prototype Simulation, requires human review.",
          ja: "移動中のスマート栄養、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "04-2.jpg",
        src: "images/comics/04-2.jpg",
        alt: {
          zh: "路上的營養學第2張漫畫頁",
          en: "Smart Nutrition on the Road comic page 2",
          ja: "移動中のスマート栄養 第2ページ"
        },
        caption: {
          zh: "路上的營養學，第2張圖。Prototype Simulation，Requires human review。",
          en: "Smart Nutrition on the Road, image 2. Prototype Simulation, requires human review.",
          ja: "移動中のスマート栄養、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "05",
    title: { zh: "分心駕駛與注意力安全", en: "Distraction, Attention and Cognitive Safety", ja: "わき見運転と注意安全" },
    images: [
      {
        page: 1,
        filename: "05-1.jpg",
        src: "images/comics/05-1.jpg",
        alt: {
          zh: "分心駕駛與注意力安全第1張漫畫頁",
          en: "Distraction, Attention and Cognitive Safety comic page 1",
          ja: "わき見運転と注意安全 第1ページ"
        },
        caption: {
          zh: "分心駕駛與注意力安全，第1張圖。Prototype Simulation，Requires human review。",
          en: "Distraction, Attention and Cognitive Safety, image 1. Prototype Simulation, requires human review.",
          ja: "わき見運転と注意安全、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "05-2.jpg",
        src: "images/comics/05-2.jpg",
        alt: {
          zh: "分心駕駛與注意力安全第2張漫畫頁",
          en: "Distraction, Attention and Cognitive Safety comic page 2",
          ja: "わき見運転と注意安全 第2ページ"
        },
        caption: {
          zh: "分心駕駛與注意力安全，第2張圖。Prototype Simulation，Requires human review。",
          en: "Distraction, Attention and Cognitive Safety, image 2. Prototype Simulation, requires human review.",
          ja: "わき見運転と注意安全、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "06",
    title: { zh: "裝卸貨、上下車與工安", en: "Loading, Unloading and Workplace Safety", ja: "荷役、乗降と労働安全" },
    images: [
      {
        page: 1,
        filename: "06-1.jpg",
        src: "images/comics/06-1.jpg",
        alt: {
          zh: "裝卸貨、上下車與工安第1張漫畫頁",
          en: "Loading, Unloading and Workplace Safety comic page 1",
          ja: "荷役、乗降と労働安全 第1ページ"
        },
        caption: {
          zh: "裝卸貨、上下車與工安，第1張圖。Prototype Simulation，Requires human review。",
          en: "Loading, Unloading and Workplace Safety, image 1. Prototype Simulation, requires human review.",
          ja: "荷役、乗降と労働安全、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "06-2.jpg",
        src: "images/comics/06-2.jpg",
        alt: {
          zh: "裝卸貨、上下車與工安第2張漫畫頁",
          en: "Loading, Unloading and Workplace Safety comic page 2",
          ja: "荷役、乗降と労働安全 第2ページ"
        },
        caption: {
          zh: "裝卸貨、上下車與工安，第2張圖。Prototype Simulation，Requires human review。",
          en: "Loading, Unloading and Workplace Safety, image 2. Prototype Simulation, requires human review.",
          ja: "荷役、乗降と労働安全、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "07",
    title: { zh: "急性症狀與藥物嗜睡", en: "Emergency Symptoms and Medication Drowsiness", ja: "急性症状と薬剤による眠気" },
    images: [
      {
        page: 1,
        filename: "07-1.jpg",
        src: "images/comics/07-1.jpg",
        alt: {
          zh: "急性症狀與藥物嗜睡第1張漫畫頁",
          en: "Emergency Symptoms and Medication Drowsiness comic page 1",
          ja: "急性症状と薬剤による眠気 第1ページ"
        },
        caption: {
          zh: "急性症狀與藥物嗜睡，第1張圖。Prototype Simulation，Requires human review。",
          en: "Emergency Symptoms and Medication Drowsiness, image 1. Prototype Simulation, requires human review.",
          ja: "急性症状と薬剤による眠気、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "07-2.jpg",
        src: "images/comics/07-2.jpg",
        alt: {
          zh: "急性症狀與藥物嗜睡第2張漫畫頁",
          en: "Emergency Symptoms and Medication Drowsiness comic page 2",
          ja: "急性症状と薬剤による眠気 第2ページ"
        },
        caption: {
          zh: "急性症狀與藥物嗜睡，第2張圖。Prototype Simulation，Requires human review。",
          en: "Emergency Symptoms and Medication Drowsiness, image 2. Prototype Simulation, requires human review.",
          ja: "急性症状と薬剤による眠気、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "08",
    title: { zh: "中醫養生與身心調節", en: "TCM Inspired Recovery and Mind Body Reset", ja: "中医学に基づく養生と心身調整" },
    images: [
      {
        page: 1,
        filename: "08-1.jpg",
        src: "images/comics/08-1.jpg",
        alt: {
          zh: "中醫養生與身心調節第1張漫畫頁",
          en: "TCM Inspired Recovery and Mind Body Reset comic page 1",
          ja: "中医学に基づく養生と心身調整 第1ページ"
        },
        caption: {
          zh: "中醫養生與身心調節，第1張圖。Prototype Simulation，Requires human review。",
          en: "TCM Inspired Recovery and Mind Body Reset, image 1. Prototype Simulation, requires human review.",
          ja: "中医学に基づく養生と心身調整、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "08-2.jpg",
        src: "images/comics/08-2.jpg",
        alt: {
          zh: "中醫養生與身心調節第2張漫畫頁",
          en: "TCM Inspired Recovery and Mind Body Reset comic page 2",
          ja: "中医学に基づく養生と心身調整 第2ページ"
        },
        caption: {
          zh: "中醫養生與身心調節，第2張圖。Prototype Simulation，Requires human review。",
          en: "TCM Inspired Recovery and Mind Body Reset, image 2. Prototype Simulation, requires human review.",
          ja: "中医学に基づく養生と心身調整、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "09",
    title: { zh: "免疫、壓力與恢復力", en: "Immunity, Stress and Recovery", ja: "免疫、ストレスと回復力" },
    images: [
      {
        page: 1,
        filename: "09-1.jpg",
        src: "images/comics/09-1.jpg",
        alt: {
          zh: "免疫、壓力與恢復力第1張漫畫頁",
          en: "Immunity, Stress and Recovery comic page 1",
          ja: "免疫、ストレスと回復力 第1ページ"
        },
        caption: {
          zh: "免疫、壓力與恢復力，第1張圖。Prototype Simulation，Requires human review。",
          en: "Immunity, Stress and Recovery, image 1. Prototype Simulation, requires human review.",
          ja: "免疫、ストレスと回復力、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "09-2.jpg",
        src: "images/comics/09-2.jpg",
        alt: {
          zh: "免疫、壓力與恢復力第2張漫畫頁",
          en: "Immunity, Stress and Recovery comic page 2",
          ja: "免疫、ストレスと回復力 第2ページ"
        },
        caption: {
          zh: "免疫、壓力與恢復力，第2張圖。Prototype Simulation，Requires human review。",
          en: "Immunity, Stress and Recovery, image 2. Prototype Simulation, requires human review.",
          ja: "免疫、ストレスと回復力、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  },
  {
    id: "10",
    title: { zh: "出車前人車雙檢查", en: "Pre Trip Driver and Vehicle Check", ja: "出発前のドライバーと車両の二重点検" },
    images: [
      {
        page: 1,
        filename: "10-1.jpg",
        src: "images/comics/10-1.jpg",
        alt: {
          zh: "出車前人車雙檢查第1張漫畫頁",
          en: "Pre Trip Driver and Vehicle Check comic page 1",
          ja: "出発前のドライバーと車両の二重点検 第1ページ"
        },
        caption: {
          zh: "出車前人車雙檢查，第1張圖。Prototype Simulation，Requires human review。",
          en: "Pre Trip Driver and Vehicle Check, image 1. Prototype Simulation, requires human review.",
          ja: "出発前のドライバーと車両の二重点検、画像1。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      },
      {
        page: 2,
        filename: "10-2.jpg",
        src: "images/comics/10-2.jpg",
        alt: {
          zh: "出車前人車雙檢查第2張漫畫頁",
          en: "Pre Trip Driver and Vehicle Check comic page 2",
          ja: "出発前のドライバーと車両の二重点検 第2ページ"
        },
        caption: {
          zh: "出車前人車雙檢查，第2張圖。Prototype Simulation，Requires human review。",
          en: "Pre Trip Driver and Vehicle Check, image 2. Prototype Simulation, requires human review.",
          ja: "出発前のドライバーと車両の二重点検、画像2。Prototype Simulation、human review が必要。"
        },
        badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
      }
    ]
  }
];

const GLOSSARY = [
  {
    term: { zh: "疲勞駕駛", en: "Fatigue driving", ja: "疲労運転" },
    desc: {
      zh: "駕駛人在睡眠不足、長時間工作、輪班或身心負荷偏高時，反應時間、視覺搜尋與判斷品質可能下降，需要透過休息制度與風險辨識共同管理。",
      en: "A risk state in which lack of sleep, long working hours, shift work, or high workload may reduce reaction time, visual scanning, and judgment quality.",
      ja: "睡眠不足、長時間勤務、交替勤務、心身負荷により、反応時間、視覚探索、判断の質が低下しやすい状態です。"
    }
  },
  {
    term: { zh: "三點接觸", en: "Three point contact", ja: "三点支持" },
    desc: {
      zh: "上下車或攀爬時，雙手雙腳中至少三點同時穩定接觸支撐面，可降低滑倒與跌落風險。",
      en: "A climbing and boarding safety practice where at least three of two hands and two feet remain in stable contact with support points.",
      ja: "乗降や昇降時に両手両足のうち少なくとも三点を支持面に保ち、転倒や墜落のリスクを下げる方法です。"
    }
  },
  {
    term: { zh: "血壓", en: "Blood pressure", ja: "血圧" },
    desc: {
      zh: "血液推動血管壁形成的壓力。長期偏高與心血管事件風險相關，駕駛職場可透過量測、轉介與健康教育進行分級管理。",
      en: "The pressure of circulating blood on vessel walls. Persistent elevation is associated with cardiovascular risk and may need tiered workplace health management.",
      ja: "血液が血管壁に与える圧力です。長期的な高値は心血管リスクと関連し、職場での測定と支援が重要です。"
    }
  },
  {
    term: { zh: "血糖", en: "Blood sugar", ja: "血糖" },
    desc: {
      zh: "血液中的葡萄糖濃度。過高、過低或波動過大都可能影響精神狀態與工作表現，需結合飲食、睡眠與醫療追蹤。",
      en: "The concentration of glucose in blood. High, low, or unstable levels may affect alertness and work performance.",
      ja: "血液中のブドウ糖濃度です。高値、低値、大きな変動は覚醒度や作業能力に影響する場合があります。"
    }
  },
  {
    term: { zh: "注意力負荷", en: "Attention load", ja: "注意負荷" },
    desc: {
      zh: "駕駛人在道路、車內設備、任務要求與外界干擾之間分配認知資源的負擔。負荷過高時，錯過關鍵訊號的機率會增加。",
      en: "The cognitive demand of allocating attention among the road, in vehicle systems, task requirements, and external distractions.",
      ja: "道路、車内装置、業務要求、外部刺激へ注意を配分する認知的負担を指します。"
    }
  },
  {
    term: { zh: "職業醫學", en: "Occupational medicine", ja: "産業医学" },
    desc: {
      zh: "研究工作環境、工作型態與健康風險之間關係的醫學領域，常應用於健康檢查、風險評估、復工與職場預防。",
      en: "A medical field focused on the relationship between work, workplace conditions, and health risk, including prevention and return to work support.",
      ja: "仕事、職場環境、健康リスクの関係を扱う医学分野で、予防、健診、復職支援に用いられます。"
    }
  },
  {
    term: { zh: "工安", en: "Workplace safety", ja: "労働安全" },
    desc: {
      zh: "透過設備、流程、教育、監測與改善回饋，降低職場事故與傷害風險的管理實務。",
      en: "Management practices that reduce workplace accident and injury risk through equipment, processes, training, monitoring, and feedback.",
      ja: "設備、手順、教育、監視、改善フィードバックを通じて職場の事故や傷害を減らす取り組みです。"
    }
  },
  {
    term: { zh: "Prototype Simulation", en: "Prototype Simulation", ja: "Prototype Simulation" },
    desc: {
      zh: "代表本網站為作品集與教育展示原型，內容與圖像需經人員審查後再用於正式企業訓練或對外發布。",
      en: "A label indicating that the website is a portfolio and education prototype and requires human review before formal deployment.",
      ja: "本サイトがポートフォリオおよび教育用プロトタイプであり、正式利用前に人による確認が必要であることを示します。"
    }
  },
  {
    term: { zh: "OSA：阻塞型睡眠呼吸中止症", en: "OSA: Obstructive Sleep Apnea", ja: "OSA：閉塞性睡眠時無呼吸症候群" },
    desc: {
      zh: "OSA 是 Obstructive Sleep Apnea，日文為閉塞性睡眠時無呼吸症候群。睡眠中反覆呼吸阻塞可能造成日間嗜睡與注意力下降，駕駛風險評估需謹慎處理。",
      en: "OSA means Obstructive Sleep Apnea. It can involve repeated airway obstruction during sleep and may contribute to daytime sleepiness and reduced attention.",
      ja: "OSA は Obstructive Sleep Apnea、閉塞性睡眠時無呼吸症候群を指します。日中の眠気や注意低下に関連する場合があります。"
    }
  },
  {
    term: { zh: "ADAS：先進駕駛輔助系統", en: "ADAS: Advanced Driver Assistance Systems", ja: "ADAS：先進運転支援システム" },
    desc: {
      zh: "ADAS 是 Advanced Driver Assistance Systems，日文為先進運転支援システム。常見功能包含警示、輔助煞車、車道輔助等，仍需駕駛人保持主動注意與正確操作。",
      en: "ADAS means Advanced Driver Assistance Systems. Common functions include warnings, assisted braking, and lane support, while the driver remains responsible for attention and operation.",
      ja: "ADAS は Advanced Driver Assistance Systems、先進運転支援システムを指します。警報、ブレーキ支援、車線支援などが含まれます。"
    }
  }
];
