/* Spirula Studio — translations.
 *
 * Loaded before site.js, which reads these three globals.
 *
 *   LANGUAGES  the language picker, in menu order.
 *   STRINGS    one dictionary per language, keyed by the data-i18n attribute
 *              in index.html. **…** in a value renders as <strong>. {os} and
 *              {amt} are substituted by site.js.
 *   SCENES     showcase copy, one entry per scene. Entry order is the scene
 *              index used by the "View scene" links.
 *
 * English is the fallback: a key missing from a language falls back to en, so
 * a partial translation is fine. Adding a language means adding it to
 * LANGUAGES and adding the matching block to STRINGS and SCENES.
 */

const LANGUAGES = [
  { code: "en", name: "English", short: "EN", tag: "EN" },
  { code: "zh", name: "中文", short: "中文", tag: "ZH-HANS" },
  { code: "zh-Hant", name: "繁體中文", short: "繁中", tag: "ZH-HANT" },
  { code: "ja", name: "日本語", short: "日本語", tag: "JA" },
  { code: "ko", name: "한국어", short: "한국어", tag: "KO" },
  { code: "fr", name: "Français", short: "FR", tag: "FR" },
  { code: "nl", name: "Nederlands", short: "NL", tag: "NL" },
  { code: "it", name: "Italiano", short: "IT", tag: "IT" },
  { code: "tr", name: "Türkçe", short: "TR", tag: "TR" },
  { code: "es", name: "Español", short: "ES", tag: "ES" },
  { code: "pt", name: "Português", short: "PT", tag: "PT" },
  { code: "ru", name: "Русский", short: "RU", tag: "RU" },
  { code: "de", name: "Deutsch", short: "DE", tag: "DE" },
];

const STRINGS = {

  en: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Products",
    "nav.showcase": "Showcase",
    "nav.download": "Download",
    "nav.donate": "Donate",
    "nav.support": "Support",
    "nav.contact": "Contact",

    /* Section eyebrows */
    "sec.features": "01 — Products",
    "sec.showcase": "02 — Showcase",
    "sec.download": "03 — Download",
    "sec.support": "04 — Support us",
    "sec.contact": "05 — Contact",

    /* Hero */
    "hero.eyebrow": "An all-in-one 3DGS app",
    "hero.sub": "We streamline the 3DGS scene reconstruction process and democratize end-to-end 3D spatial workflows.",
    "hero.cta1": "Showcase",
    "hero.cta2": "Download",
    "hero.scroll": "Scroll",

    /* Features */
    "feat.head": "Everything the pipeline needs, in one window.",
    "feat.sub": "Import, solve, train, inspect, and export in one seamless workflow. No tool switching, no terminal commands, no fragmented pipelines. What once required multiple applications is now a single, unified interface.",
    "feat.caption": "Features",
    "feat.captionRight": "Recorded on Apple Silicon",
    "feat.1t": "AI-Powered Pipeline",
    "feat.1d": "Image/video processing, masking, and camera alignment are handled automatically. Simply drag your images or videos into the app and click start.",
    "feat.2t": "VRAM Efficient",
    "feat.2d": "Train massive scenes on limited VRAM. A 4K dataset with **10 million** full-SH Gaussians fits in **8 GB** — a laptop instead of an expensive workstation.",
    "feat.3t": "Native 360 Support",
    "feat.3d": "Wide fisheye and equirectangular captures are ingested directly. No unwrapping to pinhole views, no seams, no lost field of view.",
    "feat.4t": "AMD / Mac Training",
    "feat.4d": "Vulkan-accelerated training on AMD and on Apple Silicon, **M1 through M4**. Same pipeline, same features, same outputs, no CUDA required.",
    "feat.5t": "Accurate Color",
    "feat.5d": "A novel correction mechanism handles exposure, white balance, and changing environment light. Where a plain bilateral grid or PPISP tints surfaces or darkens the scene, ours stays neutral.",
    "feat.6t": "Floater Suppression",
    "feat.6d": "Our novel mechanism suppresses floaters and false transparencies. Clean, watertight surfaces from a single **off / mild / high** setting.",
    "feat.7t": "Unified Densification",
    "feat.7d": "MCMC, IGS+, and MRNF blended into a single densification strategy — the strengths of each, without having to pick a side per scene.",
    "feat.8t": "Free & Open Source",
    "feat.8d": "No licence keys, no seats, no watermarks, no cloud upload. Read the source, build it yourself, and keep whatever you make.",

    /* Showcase */
    "show.view": "View scene",
    "show.close": "Close",
    "show.capture": "Capture",
    "show.train": "Train time",
    "show.type": "Scene type",

    /* Download */
    "dl.head": "Install once. Reconstruct anywhere.",
    "dl.for": "Download for {os}",

    /* System requirements */
    "spec.title": "Recommended minimum setup",
    "spec.os": "Operating system",
    "spec.gpu": "GPU",
    "spec.cpu": "Processor",
    "spec.memory": "Memory",
    "spec.storage": "Storage",
    "spec.install": "Installation",

    /* Support */
    "sup.head": "Fund the machines that build Spirula.",
    "sup.sub": "Spirula stays free and open source. Instead of asking for open-ended donations, we crowdfund the specific hardware that makes development faster — and we show you exactly where every contribution goes.",
    "sup.next": "Up next",
    "sup.purpose": "32 GB of VRAM lets us train and evaluate scenes roughly three times faster, and test the large-scene path we cannot reach on current hardware. Every release ships sooner because of it.",
    "sup.nextPurpose": "A pro-grade AMD GPU so Spirula runs as well on Radeon as it does on NVIDIA — every AMD bug reproduced and fixed on real hardware.",
    "sup.raisedLabel": "Raised so far",
    "sup.toGo": "{amt} to go",
    "sup.amount": "Choose an amount",
    "sup.freqOnce": "One-time",
    "sup.freqMonthly": "Monthly",
    "sup.customPh": "Custom",
    "sup.back": "Support this goal",
    "sup.note": "Checkout opens on GitHub Sponsors. Payments are processed in USD; monthly support can be cancelled anytime.",
    "sup.ledgerTitle": "Where the money went",
    "sup.ledgerEmpty": "Nothing purchased yet — the Radeon Pro W7800 is goal #1. Every purchase will be listed here with its date, amount and receipt.",

    /* Contact */
    "contact.head": "Let's build the future.",
    "contact.sub": "Questions about a capture, a pipeline integration, or a bug you can reproduce — write to us and a human who works on Spirula answers.",
    "contact.cta": "Contact us",

    /* Footer */
    "footer.tagline": "Your virtual world builder",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.contactCol": "Contact",
    "footer.sysreq": "System requirements",
    "footer.release": "Release notes",
    "footer.bug": "Report a bug",
    "footer.request": "Feature requests",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Site — All rights reserved",
  },

  zh: {
    /* Brand */
    "brand.wordmark": "旋影工坊",
    "brand.hero": { accent: "旋影", rest: "工坊" },

    /* Navigation */
    "nav.features": "功能",
    "nav.showcase": "成果",
    "nav.download": "下载",
    "nav.donate": "支持我们",
    "nav.support": "支持",
    "nav.contact": "联系",

    /* Section eyebrows */
    "sec.features": "01 — 功能特性",
    "sec.showcase": "02 — 成果",
    "sec.download": "03 — 下载",
    "sec.support": "04 — 支持我们",
    "sec.contact": "05 — 联系我们",

    /* Hero */
    "hero.eyebrow": "一体化 3DGS 应用",
    "hero.sub": "简化 3DGS 场景重建流程，体验端到端的三维空间工作流",
    "hero.cta1": "成果展示",
    "hero.cta2": "下载",
    "hero.scroll": "向下滚动",

    /* Features */
    "feat.head": "一个界面，整个流程。",
    "feat.sub": "导入、求解、训练、检视与导出，在一条顺畅的流程中完成。无需切换工具，无需命令行，也没有割裂的流程。过去需要多个软件才能完成的工作，如今只需一个统一的界面。",
    "feat.caption": "功能",
    "feat.captionRight": "录制于 Apple Silicon",
    "feat.1t": "AI 驱动流程",
    "feat.1d": "图像与视频处理、遮罩与相机对齐全部自动完成。只需将图像或视频拖入软件，点击开始即可。",
    "feat.2t": "显存友好",
    "feat.2d": "在有限显存下训练超大规模场景。包含 **1000 万** 个完整球谐高斯点的 4K 数据集只需 **8 GB** 显存，让笔记本替代昂贵工作站。",
    "feat.3t": "原生 360 支持",
    "feat.3d": "直接读取大广角鱼眼与全景素材。无需展开为透视图，没有接缝，视场角不打折。",
    "feat.4t": "AMD / Mac 训练",
    "feat.4d": "在 AMD 与 Apple Silicon（**M1 至 M4**）上通过 Vulkan 加速训练。流程一致，功能一致，输出一致，无需 CUDA。",
    "feat.5t": "精准色彩",
    "feat.5d": "全新的色彩校正机制可应对曝光、白平衡与环境光变化。普通双边网格或 PPISP 会让表面偏色或让画面变暗，而我们的方案保持中性。",
    "feat.6t": "抑制浮点噪声",
    "feat.6d": "我们的全新机制可抑制浮点噪声与虚假透明。只需在「**关闭 / 温和 / 强**」中选择，即可获得干净、封闭的表面。",
    "feat.7t": "统一致密化",
    "feat.7d": "将 MCMC、IGS+ 与 MRNF 融合为统一的致密化策略，兼顾各自优势，无需为每个场景取舍。",
    "feat.8t": "自由开源",
    "feat.8d": "没有许可密钥，没有席位限制，没有水印，无需上传云端。阅读源码，自行构建，成果归你所有。",

    /* Showcase */
    "show.view": "查看场景",
    "show.close": "关闭",
    "show.capture": "采集方式",
    "show.train": "训练时长",
    "show.type": "场景类型",

    /* Download */
    "dl.head": "一次安装，随处创造。",
    "dl.for": "下载 {os} 版本",

    /* System requirements */
    "spec.title": "建议的最低配置",
    "spec.os": "操作系统",
    "spec.gpu": "显卡",
    "spec.cpu": "处理器",
    "spec.memory": "内存",
    "spec.storage": "存储空间",
    "spec.install": "安装",

    /* Support */
    "sup.head": "为旋影工坊充电。",
    "sup.sub": "旋影工坊永远免费且开源。你的支持不会进入一个模糊的“开发基金”，而是直接用于购买推动 Spirula 发展的硬件设备。每一份贡献，都对应一个明确的目标。",
    "sup.next": "下一个目标",
    "sup.purpose": "32 GB 显存让场景训练与评估提速约三倍，并让我们能够测试现有硬件无法承载的大场景流程。每个版本都会因此更早发布。",
    "sup.nextPurpose": "一块专业级 AMD 显卡，让 Spirula 在 Radeon 上与 NVIDIA 同样流畅——每个 AMD 问题都能在真实硬件上复现并修复。",
    "sup.raisedLabel": "已筹金额",
    "sup.toGo": "还差 {amt}",
    "sup.amount": "选择金额",
    "sup.freqOnce": "单次",
    "sup.freqMonthly": "每月",
    "sup.customPh": "自定义",
    "sup.back": "支持该目标",
    "sup.note": "付款将跳转至 GitHub Sponsors，以美元结算；每月支持可随时取消。",
    "sup.ledgerTitle": "资金去向",
    "sup.ledgerEmpty": "尚未购买任何设备——Radeon Pro W7800 是第一个目标。每笔购买都会在这里列出日期、金额与凭证。",

    /* Contact */
    "contact.head": "你的想法，我们实现",
    "contact.sub": "关于素材采集、流程集成，或任何可复现的问题，欢迎与我们交流，我们会与你一起解决。",
    "contact.cta": "联系我们",

    /* Footer */
    "footer.tagline": "你的虚拟世界构建器",
    "footer.product": "产品",
    "footer.resources": "资源",
    "footer.contactCol": "联系",
    "footer.sysreq": "系统需求",
    "footer.release": "更新日志",
    "footer.bug": "反馈问题",
    "footer.request": "功能建议",
    "footer.rights": "© 2026 旋影工坊",
    "footer.appLicence": "软件 — GNU GPLv3",
    "footer.siteLicence": "网站 — 保留所有权利",
  },

  "zh-Hant": {
    /* Brand */
    "brand.wordmark": "旋影工坊",
    "brand.hero": { accent: "旋影", rest: "工坊" },

    /* Navigation */
    "nav.features": "功能",
    "nav.showcase": "成果",
    "nav.download": "下載",
    "nav.donate": "支持我們",
    "nav.support": "支持",
    "nav.contact": "聯繫",

    /* Section eyebrows */
    "sec.features": "01 — 功能特性",
    "sec.showcase": "02 — 成果",
    "sec.download": "03 — 下載",
    "sec.support": "04 — 支持我們",
    "sec.contact": "05 — 聯繫我們",

    /* Hero */
    "hero.eyebrow": "一體化 3DGS 應用",
    "hero.sub": "簡化 3DGS 場景重建流程，體驗端到端的三維空間工作流",
    "hero.cta1": "成果展示",
    "hero.cta2": "下載",
    "hero.scroll": "向下滑動",

    /* Features */
    "feat.head": "一個介面，整個流程。",
    "feat.sub": "匯入、求解、訓練、檢視與匯出，在一條順暢的流程中完成。無需切換工具，無需命令列，也沒有割裂的流程。過去需要多個軟體才能完成的工作，如今只需一個統一的介面。",
    "feat.caption": "功能",
    "feat.captionRight": "錄製於 Apple Silicon",
    "feat.1t": "AI 驅動流程",
    "feat.1d": "圖像與視訊處理、遮罩與相機對齊全部自動完成。只需將圖像或視訊拖入軟體，點擊開始即可。",
    "feat.2t": "顯示記憶體友善",
    "feat.2d": "在有限顯示記憶體下訓練超大規模場景。包含 **1000 萬** 個完整球諧高斯點的 4K 資料集只需 **8 GB**，讓筆電取代昂貴工作站。",
    "feat.3t": "原生 360 支援",
    "feat.3d": "直接讀取大廣角魚眼與全景素材。無需展開為透視圖，沒有接縫，視角不打折。",
    "feat.4t": "AMD / Mac 訓練",
    "feat.4d": "在 AMD 與 Apple Silicon（**M1 至 M4**）上透過 Vulkan 加速訓練。流程一致，功能一致，輸出一致，無需 CUDA。",
    "feat.5t": "精準色彩",
    "feat.5d": "全新的色彩校正機制可應對曝光、白平衡與環境光變化。普通雙邊網格或 PPISP 會讓表面偏色或讓畫面變暗，而我們的方案保持中性。",
    "feat.6t": "抑制浮點雜訊",
    "feat.6d": "我們的全新機制可抑制浮點雜訊與虛假透明。只需在「**關閉 / 溫和 / 強**」中選擇，即可獲得乾淨、封閉的表面。",
    "feat.7t": "統一緻密化",
    "feat.7d": "將 MCMC、IGS+ 與 MRNF 融合為統一的緻密化策略，兼顧各自優勢，無需為每個場景取捨。",
    "feat.8t": "自由開源",
    "feat.8d": "沒有授權金鑰，沒有席次限制，沒有浮水印，無需上傳雲端。閱讀原始碼，自行建置，成果歸你所有。",

    /* Showcase */
    "show.view": "檢視場景",
    "show.close": "關閉",
    "show.capture": "採集方式",
    "show.train": "訓練時長",
    "show.type": "場景類型",

    /* Download */
    "dl.head": "一次安裝，隨處創造。",
    "dl.for": "下載 {os} 版本",

    /* System requirements */
    "spec.title": "建議的最低配備",
    "spec.os": "作業系統",
    "spec.gpu": "顯示卡",
    "spec.cpu": "處理器",
    "spec.memory": "記憶體",
    "spec.storage": "儲存空間",
    "spec.install": "安裝",

    /* Support */
    "sup.head": "為旋影工坊充電。",
    "sup.sub": "旋影工坊永遠免費且開源。你的支持不會進入一個模糊的「開發基金」，而是直接用於購買推動 Spirula 發展的硬體設備。每一份貢獻，都對應一個明確的目標。",
    "sup.next": "下一個目標",
    "sup.purpose": "32 GB 顯示記憶體讓場景訓練與評估提速約三倍，並讓我們能夠測試現有硬體無法承載的大場景流程。每個版本都會因此更早發布。",
    "sup.nextPurpose": "一塊專業級 AMD 顯示卡，讓 Spirula 在 Radeon 上與 NVIDIA 同樣流暢——每個 AMD 問題都能在真實硬體上重現並修復。",
    "sup.raisedLabel": "已籌金額",
    "sup.toGo": "還差 {amt}",
    "sup.amount": "選擇金額",
    "sup.freqOnce": "單次",
    "sup.freqMonthly": "每月",
    "sup.customPh": "自訂",
    "sup.back": "支持該目標",
    "sup.note": "付款將跳轉至 GitHub Sponsors，以美元結算；每月支持可隨時取消。",
    "sup.ledgerTitle": "資金去向",
    "sup.ledgerEmpty": "尚未購買任何設備——Radeon Pro W7800 是第一個目標。每筆購買都會在這裡列出日期、金額與憑證。",

    /* Contact */
    "contact.head": "你的想法，我們實現",
    "contact.sub": "關於素材採集、流程整合，或任何可重現的問題，歡迎與我們交流，我們會與你一起解決。",
    "contact.cta": "聯繫我們",

    /* Footer */
    "footer.tagline": "你的虛擬世界構建器",
    "footer.product": "產品",
    "footer.resources": "資源",
    "footer.contactCol": "聯繫",
    "footer.sysreq": "系統需求",
    "footer.release": "更新日誌",
    "footer.bug": "回報問題",
    "footer.request": "功能建議",
    "footer.rights": "© 2026 旋影工坊",
    "footer.appLicence": "軟體 — GNU GPLv3",
    "footer.siteLicence": "網站 — 保留所有權利",
  },

  ja: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "機能",
    "nav.showcase": "事例",
    "nav.download": "ダウンロード",
    "nav.donate": "支援する",
    "nav.support": "支援",
    "nav.contact": "お問い合わせ",

    /* Section eyebrows */
    "sec.features": "01 — 機能",
    "sec.showcase": "02 — 事例",
    "sec.download": "03 — ダウンロード",
    "sec.support": "04 — 支援する",
    "sec.contact": "05 — お問い合わせ",

    /* Hero */
    "hero.eyebrow": "オールインワン 3DGS アプリ",
    "hero.sub": "3DGS のシーン再構築を簡素化し、エンドツーエンドの3D空間ワークフローを誰にでも。",
    "hero.cta1": "事例",
    "hero.cta2": "ダウンロード",
    "hero.scroll": "スクロール",

    /* Features */
    "feat.head": "パイプラインのすべてを、ひとつの画面で。",
    "feat.sub": "読み込み、解析、学習、確認、書き出しを、ひと続きのワークフローで完結。ツールの切り替えも、ターミナル操作も、分断された工程もありません。かつて複数のアプリを要した作業が、ひとつの統合されたインターフェースになりました。",
    "feat.caption": "機能",
    "feat.captionRight": "Apple Silicon で収録",
    "feat.1t": "AI 駆動パイプライン",
    "feat.1d": "画像・動画処理、マスク、カメラ位置合わせはすべて自動です。画像や動画をドラッグして、開始を押すだけ。",
    "feat.2t": "VRAM 効率",
    "feat.2d": "限られた VRAM で大規模シーンを学習。**1000 万**個のフル SH ガウシアンを含む 4K データセットが **8 GB** に収まり、高価なワークステーションの代わりにノート PC で完結します。",
    "feat.3t": "360 ネイティブ対応",
    "feat.3d": "広角魚眼と正距円筒の素材をそのまま取り込み。透視変換も継ぎ目もなく、画角を失いません。",
    "feat.4t": "AMD / Mac 学習",
    "feat.4d": "AMD と Apple Silicon（**M1〜M4**）で Vulkan 加速学習。同じパイプライン、同じ機能、同じ出力で、CUDA は不要です。",
    "feat.5t": "正確な色再現",
    "feat.5d": "露出・ホワイトバランス・環境光の変化に対応する新しい補正機構。通常のバイラテラルグリッドや PPISP が面に色被りを出したり画面を暗くしたりする場面でも、中立を保ちます。",
    "feat.6t": "フローター抑制",
    "feat.6d": "独自の機構がフローターと偽の半透明を抑制します。「**オフ / 弱 / 強**」を選ぶだけで、清潔で隙のない面が得られます。",
    "feat.7t": "統合デンシフィケーション",
    "feat.7d": "MCMC・IGS+・MRNF を単一の密度化戦略に統合。シーンごとに選ばずに、それぞれの長所を活かします。",
    "feat.8t": "無料・オープンソース",
    "feat.8d": "ライセンスキーもシート課金も透かしもクラウド送信もありません。ソースを読み、自分でビルドし、成果はあなたのものです。",

    /* Showcase */
    "show.view": "シーンを見る",
    "show.close": "閉じる",
    "show.capture": "撮影",
    "show.train": "学習時間",
    "show.type": "シーン種別",

    /* Download */
    "dl.head": "一度インストールすれば、どこでも再構築。",
    "dl.for": "{os} 版をダウンロード",

    /* System requirements */
    "spec.title": "推奨最低環境",
    "spec.os": "対応OS",
    "spec.gpu": "GPU",
    "spec.cpu": "プロセッサ",
    "spec.memory": "メモリ",
    "spec.storage": "ストレージ",
    "spec.install": "インストール",

    /* Support */
    "sup.head": "Spirula をつくる機材に、力を。",
    "sup.sub": "Spirula は無料かつオープンソースのままです。期限のない寄付を募るのではなく、開発を加速する具体的な機材のためにクラウドファンディングを行い、資金の使途をすべて公開します。",
    "sup.next": "次の目標",
    "sup.purpose": "32 GB の VRAM により、シーンの学習と評価が約3倍速くなり、現在の機材では扱えない大規模シーンの検証も可能になります。すべてのリリースがその分早く届きます。",
    "sup.nextPurpose": "プロ向け AMD GPU。Radeon でも NVIDIA と同等に動作するよう、AMD 環境の不具合を実機で再現・修正します。",
    "sup.raisedLabel": "これまでの支援額",
    "sup.toGo": "目標まで {amt}",
    "sup.amount": "金額を選ぶ",
    "sup.freqOnce": "1回のみ",
    "sup.freqMonthly": "毎月",
    "sup.customPh": "カスタム",
    "sup.back": "この目標を支援",
    "sup.note": "決済は GitHub Sponsors で行われます（米ドル建て）。毎月の支援はいつでも解約できます。",
    "sup.ledgerTitle": "資金の使途",
    "sup.ledgerEmpty": "まだ購入品はありません。Radeon Pro W7800 が最初の目標です。購入はすべて日付・金額・領収書付きでここに掲載されます。",

    /* Contact */
    "contact.head": "未来を、ともに。",
    "contact.sub": "撮影方法、パイプライン統合、再現可能な不具合について——ご連絡いただければ、Spirula の開発者が直接お答えします。",
    "contact.cta": "お問い合わせ",

    /* Footer */
    "footer.tagline": "あなたの仮想世界ビルダー",
    "footer.product": "製品",
    "footer.resources": "リソース",
    "footer.contactCol": "連絡先",
    "footer.sysreq": "動作環境",
    "footer.release": "リリースノート",
    "footer.bug": "不具合を報告",
    "footer.request": "機能リクエスト",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "アプリ — GNU GPLv3",
    "footer.siteLicence": "サイト — 全権利留保",
  },

  ko: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "기능",
    "nav.showcase": "사례",
    "nav.download": "다운로드",
    "nav.donate": "후원",
    "nav.support": "후원",
    "nav.contact": "문의",

    /* Section eyebrows */
    "sec.features": "01 — 기능",
    "sec.showcase": "02 — 사례",
    "sec.download": "03 — 다운로드",
    "sec.support": "04 — 후원하기",
    "sec.contact": "05 — 문의",

    /* Hero */
    "hero.eyebrow": "올인원 3DGS 앱",
    "hero.sub": "3DGS 장면 재구성 과정을 간소화하고, 엔드투엔드 3D 공간 워크플로를 누구나 쓸 수 있게 만듭니다.",
    "hero.cta1": "사례",
    "hero.cta2": "다운로드",
    "hero.scroll": "스크롤",

    /* Features */
    "feat.head": "파이프라인에 필요한 모든 것을 한 창에서.",
    "feat.sub": "가져오기, 해석, 학습, 검토, 내보내기를 하나의 매끄러운 워크플로에서 처리합니다. 도구 전환도, 터미널 명령도, 흩어진 파이프라인도 없습니다. 여러 개의 애플리케이션이 필요했던 작업이 이제 하나의 통합된 인터페이스가 되었습니다.",
    "feat.caption": "기능",
    "feat.captionRight": "Apple Silicon에서 녹화",
    "feat.1t": "AI 기반 파이프라인",
    "feat.1d": "이미지·영상 처리, 마스킹, 카메라 정렬을 모두 자동으로 처리합니다. 이미지나 영상을 끌어다 놓고 시작만 누르세요.",
    "feat.2t": "VRAM 효율",
    "feat.2d": "제한된 VRAM으로 대규모 장면을 학습합니다. 완전 SH 가우시안 **1,000만** 개의 4K 데이터셋이 **8GB**에 들어가, 값비싼 워크스테이션 대신 노트북으로 충분합니다.",
    "feat.3t": "360 기본 지원",
    "feat.3d": "광각 어안과 등장방형 촬영본을 그대로 읽습니다. 원근 변환도, 이음선도 없고, 화각을 잃지 않습니다.",
    "feat.4t": "AMD / Mac 학습",
    "feat.4d": "AMD와 Apple Silicon(**M1~M4**)에서 Vulkan 가속 학습. 동일한 파이프라인, 동일한 기능, 동일한 결과물, CUDA는 필요 없습니다.",
    "feat.5t": "정확한 색",
    "feat.5d": "노출, 화이트 밸런스, 환경광 변화를 다루는 새로운 보정 방식입니다. 일반 양방향 그리드나 PPISP가 표면에 색을 입히거나 장면을 어둡게 만드는 곳에서도 중립을 유지합니다.",
    "feat.6t": "플로터 억제",
    "feat.6d": "자체 개발한 방식으로 플로터와 잘못된 반투명을 억제합니다. '**끔 / 약 / 강**' 하나만 골라도 깔끔하고 빈틈없는 표면을 얻습니다.",
    "feat.7t": "통합 밀집화",
    "feat.7d": "MCMC, IGS+, MRNF를 하나의 밀집화 전략으로 결합했습니다. 장면마다 고를 필요 없이 각각의 장점을 얻습니다.",
    "feat.8t": "무료 오픈 소스",
    "feat.8d": "라이선스 키도, 좌석 수도, 워터마크도, 클라우드 업로드도 없습니다. 소스를 읽고 직접 빌드하고, 결과물은 당신의 것입니다.",

    /* Showcase */
    "show.view": "장면 보기",
    "show.close": "닫기",
    "show.capture": "촬영",
    "show.train": "학습 시간",
    "show.type": "장면 유형",

    /* Download */
    "dl.head": "한 번 설치하면, 어디서든 재구성.",
    "dl.for": "{os}용 다운로드",

    /* System requirements */
    "spec.title": "권장 최소 사양",
    "spec.os": "운영체제",
    "spec.gpu": "GPU",
    "spec.cpu": "프로세서",
    "spec.memory": "메모리",
    "spec.storage": "저장 공간",
    "spec.install": "설치",

    /* Support */
    "sup.head": "Spirula를 만드는 장비를 함께 마련해 주세요.",
    "sup.sub": "Spirula는 계속 무료이며 오픈소스입니다. 기한 없는 기부를 요청하는 대신, 개발을 앞당길 구체적인 장비를 크라우드펀딩하고 모든 사용처를 공개합니다.",
    "sup.next": "다음 목표",
    "sup.purpose": "32GB VRAM으로 장면 학습과 평가가 약 3배 빨라지고, 현재 장비로는 불가능한 대형 장면 경로까지 검증할 수 있습니다. 모든 릴리스가 그만큼 빨라집니다.",
    "sup.nextPurpose": "프로급 AMD GPU로 Radeon에서도 NVIDIA만큼 잘 작동하도록 — 모든 AMD 버그를 실제 하드웨어에서 재현하고 수정합니다.",
    "sup.raisedLabel": "현재까지 모금액",
    "sup.toGo": "{amt} 남음",
    "sup.amount": "금액 선택",
    "sup.freqOnce": "일회성",
    "sup.freqMonthly": "매월",
    "sup.customPh": "직접 입력",
    "sup.back": "이 목표 후원",
    "sup.note": "결제는 GitHub Sponsors에서 미국 달러로 진행됩니다. 매월 후원은 언제든지 취소할 수 있습니다.",
    "sup.ledgerTitle": "자금 사용 내역",
    "sup.ledgerEmpty": "아직 구매한 장비가 없습니다 — Radeon Pro W7800이 첫 번째 목표입니다. 모든 구매 내역은 날짜, 금액, 영수증과 함께 여기에 게시됩니다.",

    /* Contact */
    "contact.head": "함께 미래를 만듭니다.",
    "contact.sub": "촬영 방식, 파이프라인 연동, 재현 가능한 버그에 관해 문의해 주세요. Spirula를 만드는 사람이 직접 답합니다.",
    "contact.cta": "문의하기",

    /* Footer */
    "footer.tagline": "당신의 가상 세계 빌더",
    "footer.product": "제품",
    "footer.resources": "자료",
    "footer.contactCol": "연락처",
    "footer.sysreq": "시스템 요구 사항",
    "footer.release": "릴리스 노트",
    "footer.bug": "버그 신고",
    "footer.request": "기능 제안",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "앱 — GNU GPLv3",
    "footer.siteLicence": "사이트 — 모든 권리 보유",
  },

  fr: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Fonctionnalités",
    "nav.showcase": "Réalisations",
    "nav.download": "Télécharger",
    "nav.donate": "Soutenir",
    "nav.support": "Soutenir",
    "nav.contact": "Contact",

    /* Section eyebrows */
    "sec.features": "01 — Fonctionnalités",
    "sec.showcase": "02 — Réalisations",
    "sec.download": "03 — Téléchargement",
    "sec.support": "04 — Soutenir",
    "sec.contact": "05 — Contact",

    /* Hero */
    "hero.eyebrow": "Une application 3DGS tout-en-un",
    "hero.sub": "Nous simplifions la reconstruction de scènes 3DGS et démocratisons les flux de travail spatiaux 3D de bout en bout.",
    "hero.cta1": "Réalisations",
    "hero.cta2": "Télécharger",
    "hero.scroll": "Défiler",

    /* Features */
    "feat.head": "Tout ce que la chaîne exige, dans une seule fenêtre.",
    "feat.sub": "Importer, résoudre, entraîner, inspecter et exporter dans un flux de travail continu. Aucun changement d'outil, aucune commande dans le terminal, aucun pipeline fragmenté. Ce qui exigeait plusieurs applications tient désormais dans une seule interface unifiée.",
    "feat.caption": "Fonctionnalités",
    "feat.captionRight": "Enregistré sur Apple Silicon",
    "feat.1t": "Chaîne pilotée par IA",
    "feat.1d": "Traitement des images et vidéos, masquage et alignement des caméras sont gérés automatiquement. Glissez vos images ou vidéos dans le logiciel et cliquez sur Démarrer.",
    "feat.2t": "Sobre en VRAM",
    "feat.2d": "Entraînez de très grandes scènes avec peu de VRAM. Un jeu de données 4K de **10 millions** de gaussiennes en SH complètes tient dans **8 Go** : un portable au lieu d'une station coûteuse.",
    "feat.3t": "Prise en charge 360 native",
    "feat.3d": "Les captures fisheye très ouvertes et équirectangulaires sont lues directement. Aucune conversion en vues rectilignes, aucune couture, aucun champ de vision perdu.",
    "feat.4t": "Entraînement AMD / Mac",
    "feat.4d": "Entraînement accéléré par Vulkan sur AMD et sur Apple Silicon, **du M1 au M4**. Même chaîne, mêmes fonctions, mêmes résultats, aucun CUDA requis.",
    "feat.5t": "Couleurs justes",
    "feat.5d": "Un mécanisme de correction inédit gère l'exposition, la balance des blancs et les variations de lumière ambiante. Là où une grille bilatérale classique ou un PPISP teinte les surfaces ou assombrit la scène, la nôtre reste neutre.",
    "feat.6t": "Suppression des floaters",
    "feat.6d": "Notre mécanisme inédit supprime les floaters et les fausses transparences. Des surfaces nettes et étanches via un simple réglage « **désactivé / modéré / élevé** ».",
    "feat.7t": "Densification unifiée",
    "feat.7d": "MCMC, IGS+ et MRNF fondus en une seule stratégie de densification : les atouts de chacune, sans choisir scène par scène.",
    "feat.8t": "Libre et open source",
    "feat.8d": "Pas de clés de licence, pas de sièges, pas de filigrane, aucun envoi vers le cloud. Lisez le code, compilez-le vous-même, gardez ce que vous produisez.",

    /* Showcase */
    "show.view": "Voir la scène",
    "show.close": "Fermer",
    "show.capture": "Capture",
    "show.train": "Temps d'entraînement",
    "show.type": "Type de scène",

    /* Download */
    "dl.head": "Installez une fois. Reconstruisez partout.",
    "dl.for": "Télécharger pour {os}",

    /* System requirements */
    "spec.title": "Configuration minimale recommandée",
    "spec.os": "Système",
    "spec.gpu": "GPU",
    "spec.cpu": "Processeur",
    "spec.memory": "Mémoire",
    "spec.storage": "Stockage",
    "spec.install": "Installation",

    /* Support */
    "sup.head": "Financez les machines qui construisent Spirula.",
    "sup.sub": "Spirula reste gratuit et open source. Plutôt que des dons sans fin, nous finançons du matériel précis qui accélère le développement — et nous montrons exactement où va chaque contribution.",
    "sup.next": "Prochain objectif",
    "sup.purpose": "32 Go de VRAM permettent d'entraîner et d'évaluer les scènes environ trois fois plus vite, et de tester les grandes scènes hors de portée du matériel actuel. Chaque version arrive plus tôt.",
    "sup.nextPurpose": "Un GPU AMD professionnel pour que Spirula tourne aussi bien sur Radeon que sur NVIDIA — chaque bug AMD reproduit et corrigé sur du vrai matériel.",
    "sup.raisedLabel": "Collecté à ce jour",
    "sup.toGo": "{amt} restants",
    "sup.amount": "Choisissez un montant",
    "sup.freqOnce": "Ponctuel",
    "sup.freqMonthly": "Mensuel",
    "sup.customPh": "Autre",
    "sup.back": "Soutenir cet objectif",
    "sup.note": "Le paiement s'effectue sur GitHub Sponsors, en USD ; le soutien mensuel est résiliable à tout moment.",
    "sup.ledgerTitle": "Où va l'argent",
    "sup.ledgerEmpty": "Rien d'acheté pour l'instant — la Radeon Pro W7800 est l'objectif n°1. Chaque achat sera listé ici avec date, montant et reçu.",

    /* Contact */
    "contact.head": "Construisons l'avenir.",
    "contact.sub": "Une question sur une capture, une intégration de chaîne ou un bug reproductible — écrivez-nous, un membre de l'équipe Spirula vous répond.",
    "contact.cta": "Nous contacter",

    /* Footer */
    "footer.tagline": "Votre créateur de mondes virtuels",
    "footer.product": "Produit",
    "footer.resources": "Ressources",
    "footer.contactCol": "Contact",
    "footer.sysreq": "Configuration requise",
    "footer.release": "Notes de version",
    "footer.bug": "Signaler un bug",
    "footer.request": "Suggérer une fonction",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Site — Tous droits réservés",
  },

  nl: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Functies",
    "nav.showcase": "Werk",
    "nav.download": "Downloaden",
    "nav.donate": "Doneren",
    "nav.support": "Steunen",
    "nav.contact": "Contact",

    /* Section eyebrows */
    "sec.features": "01 — Functies",
    "sec.showcase": "02 — Werk",
    "sec.download": "03 — Downloaden",
    "sec.support": "04 — Steun ons",
    "sec.contact": "05 — Contact",

    /* Hero */
    "hero.eyebrow": "Eén 3DGS-app voor alles",
    "hero.sub": "Wij vereenvoudigen 3DGS-scènereconstructie en maken end-to-end 3D-workflows voor iedereen bereikbaar.",
    "hero.cta1": "Werk",
    "hero.cta2": "Downloaden",
    "hero.scroll": "Scrollen",

    /* Features */
    "feat.head": "Alles wat de pijplijn nodig heeft, in één venster.",
    "feat.sub": "Importeren, oplossen, trainen, inspecteren en exporteren in één vloeiende workflow. Geen wisselen van tools, geen terminalcommando's, geen versnipperde pipelines. Wat eerder meerdere applicaties vroeg, is nu één samenhangende interface.",
    "feat.caption": "Functies",
    "feat.captionRight": "Opgenomen op Apple Silicon",
    "feat.1t": "AI-gestuurde pijplijn",
    "feat.1d": "Beeld- en videoverwerking, maskeren en camera-uitlijning gebeuren automatisch. Sleep je beelden of video's in de software en klik op Start.",
    "feat.2t": "Zuinig met VRAM",
    "feat.2d": "Train grote scènes met weinig VRAM. Een 4K-dataset met **10 miljoen** volledige SH-Gaussians past in **8 GB** — een laptop in plaats van een duur werkstation.",
    "feat.3t": "Native 360-ondersteuning",
    "feat.3d": "Groothoek-fisheye en equirectangulaire opnamen worden direct ingelezen. Geen omzetting naar rechtlijnige beelden, geen naden, geen verloren beeldveld.",
    "feat.4t": "AMD / Mac-training",
    "feat.4d": "Vulkan-versnelde training op AMD en op Apple Silicon, **M1 tot M4**. Dezelfde pijplijn, dezelfde functies, dezelfde resultaten, geen CUDA nodig.",
    "feat.5t": "Kleurgetrouw",
    "feat.5d": "Een nieuw correctiemechanisme vangt belichting, witbalans en wisselend omgevingslicht op. Waar een gewoon bilateraal raster of PPISP oppervlakken kleurt of de scène verduistert, blijft het bij ons neutraal.",
    "feat.6t": "Floaters onderdrukt",
    "feat.6d": "Ons nieuwe mechanisme onderdrukt floaters en valse transparantie. Schone, gesloten oppervlakken met één instelling: « **uit / mild / hoog** ».",
    "feat.7t": "Verenigde densificatie",
    "feat.7d": "MCMC, IGS+ en MRNF samengebracht in één densificatiestrategie — de sterke punten van elk, zonder per scène te kiezen.",
    "feat.8t": "Vrij en open source",
    "feat.8d": "Geen licentiesleutels, geen seats, geen watermerk, geen cloudupload. Lees de code, bouw hem zelf, en houd wat je maakt.",

    /* Showcase */
    "show.view": "Scène bekijken",
    "show.close": "Sluiten",
    "show.capture": "Opname",
    "show.train": "Trainingstijd",
    "show.type": "Scènetype",

    /* Download */
    "dl.head": "Eén keer installeren. Overal reconstrueren.",
    "dl.for": "Downloaden voor {os}",

    /* System requirements */
    "spec.title": "Aanbevolen minimumsysteem",
    "spec.os": "Besturingssysteem",
    "spec.gpu": "GPU",
    "spec.cpu": "Processor",
    "spec.memory": "Geheugen",
    "spec.storage": "Opslag",
    "spec.install": "Installatie",

    /* Support */
    "sup.head": "Financier de machines die Spirula bouwen.",
    "sup.sub": "Spirula blijft gratis en open source. In plaats van open donaties vragen we crowdfunding voor specifieke hardware die de ontwikkeling versnelt — en we laten precies zien waar elke bijdrage naartoe gaat.",
    "sup.next": "Volgend doel",
    "sup.purpose": "32 GB VRAM maakt het trainen en evalueren van scènes ongeveer drie keer sneller en laat ons grote scènes testen die met de huidige hardware onbereikbaar zijn. Elke release komt daardoor eerder uit.",
    "sup.nextPurpose": "Een professionele AMD-GPU zodat Spirula op Radeon net zo goed draait als op NVIDIA — elke AMD-bug gereproduceerd en opgelost op echte hardware.",
    "sup.raisedLabel": "Tot nu toe opgehaald",
    "sup.toGo": "nog {amt}",
    "sup.amount": "Kies een bedrag",
    "sup.freqOnce": "Eenmalig",
    "sup.freqMonthly": "Maandelijks",
    "sup.customPh": "Anders",
    "sup.back": "Steun dit doel",
    "sup.note": "Betaling verloopt via GitHub Sponsors in USD; maandelijkse steun is altijd opzegbaar.",
    "sup.ledgerTitle": "Waar het geld heen ging",
    "sup.ledgerEmpty": "Nog niets gekocht — de Radeon Pro W7800 is doel #1. Elke aankoop komt hier te staan met datum, bedrag en bon.",

    /* Contact */
    "contact.head": "Laten we de toekomst bouwen.",
    "contact.sub": "Vragen over een opname, een integratie in je pijplijn of een reproduceerbare bug — schrijf ons, iemand die aan Spirula werkt antwoordt.",
    "contact.cta": "Neem contact op",

    /* Footer */
    "footer.tagline": "Jouw bouwer van virtuele werelden",
    "footer.product": "Product",
    "footer.resources": "Bronnen",
    "footer.contactCol": "Contact",
    "footer.sysreq": "Systeemvereisten",
    "footer.release": "Release-notities",
    "footer.bug": "Bug melden",
    "footer.request": "Functie voorstellen",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Site — Alle rechten voorbehouden",
  },

  it: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Funzioni",
    "nav.showcase": "Lavori",
    "nav.download": "Scarica",
    "nav.donate": "Sostieni",
    "nav.support": "Sostieni",
    "nav.contact": "Contatti",

    /* Section eyebrows */
    "sec.features": "01 — Funzioni",
    "sec.showcase": "02 — Lavori",
    "sec.download": "03 — Download",
    "sec.support": "04 — Sostienici",
    "sec.contact": "05 — Contatti",

    /* Hero */
    "hero.eyebrow": "Un'app 3DGS tutto-in-uno",
    "hero.sub": "Semplifichiamo la ricostruzione di scene 3DGS e rendiamo accessibili i flussi di lavoro spaziali 3D end-to-end.",
    "hero.cta1": "Lavori",
    "hero.cta2": "Scarica",
    "hero.scroll": "Scorri",

    /* Features */
    "feat.head": "Tutto ciò che serve alla pipeline, in una finestra.",
    "feat.sub": "Importa, risolvi, addestra, ispeziona ed esporta in un unico flusso di lavoro continuo. Nessun cambio di strumento, nessun comando da terminale, nessuna pipeline frammentata. Ciò che richiedeva più applicazioni ora è una sola interfaccia unificata.",
    "feat.caption": "Funzionalità",
    "feat.captionRight": "Registrato su Apple Silicon",
    "feat.1t": "Pipeline guidata dall'IA",
    "feat.1d": "Elaborazione di immagini e video, mascheratura e allineamento delle camere sono automatici. Trascina immagini o video nel software e premi Avvia.",
    "feat.2t": "Efficiente in VRAM",
    "feat.2d": "Addestra scene enormi con poca VRAM. Un dataset 4K con **10 milioni** di gaussiane a SH completa sta in **8 GB**: un portatile invece di una costosa workstation.",
    "feat.3t": "Supporto 360 nativo",
    "feat.3d": "Le riprese fisheye ad ampio angolo ed equirettangolari vengono lette direttamente. Nessuna conversione in viste rettilinee, nessuna cucitura, nessun campo visivo perso.",
    "feat.4t": "Addestramento AMD / Mac",
    "feat.4d": "Addestramento accelerato da Vulkan su AMD e su Apple Silicon, **da M1 a M4**. Stessa pipeline, stesse funzioni, stessi risultati, nessun CUDA.",
    "feat.5t": "Colore accurato",
    "feat.5d": "Un meccanismo di correzione inedito gestisce esposizione, bilanciamento del bianco e variazioni della luce ambientale. Dove una normale griglia bilaterale o un PPISP vira le superfici o scurisce la scena, il nostro resta neutro.",
    "feat.6t": "Soppressione dei floater",
    "feat.6d": "Il nostro meccanismo inedito sopprime i floater e le false trasparenze. Superfici pulite e a tenuta con una sola impostazione « **off / medio / alto** ».",
    "feat.7t": "Densificazione unificata",
    "feat.7d": "MCMC, IGS+ e MRNF fusi in un'unica strategia di densificazione: i punti di forza di ciascuna, senza scegliere scena per scena.",
    "feat.8t": "Libero e open source",
    "feat.8d": "Nessuna chiave di licenza, nessuna postazione, nessun watermark, nessun caricamento in cloud. Leggi il codice, compilalo tu stesso e tieni ciò che produci.",

    /* Showcase */
    "show.view": "Vedi la scena",
    "show.close": "Chiudi",
    "show.capture": "Ripresa",
    "show.train": "Tempo di training",
    "show.type": "Tipo di scena",

    /* Download */
    "dl.head": "Installa una volta. Ricostruisci ovunque.",
    "dl.for": "Scarica per {os}",

    /* System requirements */
    "spec.title": "Configurazione minima consigliata",
    "spec.os": "Sistema operativo",
    "spec.gpu": "GPU",
    "spec.cpu": "Processore",
    "spec.memory": "Memoria",
    "spec.storage": "Spazio su disco",
    "spec.install": "Installazione",

    /* Support */
    "sup.head": "Finanzia le macchine che costruiscono Spirula.",
    "sup.sub": "Spirula resta gratuito e open source. Invece di donazioni generiche, finanziamo hardware preciso che accelera lo sviluppo — e mostriamo esattamente dove va ogni contributo.",
    "sup.next": "Prossimo obiettivo",
    "sup.purpose": "32 GB di VRAM permettono di addestrare e valutare le scene circa tre volte più in fretta e di testare le scene grandi che l'hardware attuale non regge. Ogni versione arriva prima.",
    "sup.nextPurpose": "Una GPU AMD professionale perché Spirula giri su Radeon come su NVIDIA — ogni bug AMD riprodotto e corretto su hardware reale.",
    "sup.raisedLabel": "Raccolto finora",
    "sup.toGo": "mancano {amt}",
    "sup.amount": "Scegli un importo",
    "sup.freqOnce": "Una tantum",
    "sup.freqMonthly": "Mensile",
    "sup.customPh": "Altro",
    "sup.back": "Sostieni questo obiettivo",
    "sup.note": "Il pagamento avviene su GitHub Sponsors in USD; il sostegno mensile è annullabile in qualsiasi momento.",
    "sup.ledgerTitle": "Dove sono andati i fondi",
    "sup.ledgerEmpty": "Nessun acquisto finora — la Radeon Pro W7800 è l'obiettivo n. 1. Ogni acquisto sarà elencato qui con data, importo e ricevuta.",

    /* Contact */
    "contact.head": "Costruiamo il futuro.",
    "contact.sub": "Domande su una ripresa, un'integrazione nella pipeline o un bug riproducibile — scrivici, risponde chi lavora a Spirula.",
    "contact.cta": "Contattaci",

    /* Footer */
    "footer.tagline": "Il tuo costruttore di mondi virtuali",
    "footer.product": "Prodotto",
    "footer.resources": "Risorse",
    "footer.contactCol": "Contatti",
    "footer.sysreq": "Requisiti di sistema",
    "footer.release": "Note di rilascio",
    "footer.bug": "Segnala un bug",
    "footer.request": "Proponi una funzione",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Sito — Tutti i diritti riservati",
  },

  tr: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Özellikler",
    "nav.showcase": "Çalışmalar",
    "nav.download": "İndir",
    "nav.donate": "Destekle",
    "nav.support": "Destek",
    "nav.contact": "İletişim",

    /* Section eyebrows */
    "sec.features": "01 — Özellikler",
    "sec.showcase": "02 — Çalışmalar",
    "sec.download": "03 — İndirme",
    "sec.support": "04 — Destek ol",
    "sec.contact": "05 — İletişim",

    /* Hero */
    "hero.eyebrow": "Hepsi bir arada 3DGS uygulaması",
    "hero.sub": "3DGS sahne yeniden yapılandırma sürecini basitleştiriyor, uçtan uca 3B mekânsal iş akışlarını herkes için erişilebilir kılıyoruz.",
    "hero.cta1": "Çalışmalar",
    "hero.cta2": "İndir",
    "hero.scroll": "Kaydır",

    /* Features */
    "feat.head": "Sürecin ihtiyaç duyduğu her şey, tek pencerede.",
    "feat.sub": "İçe alma, çözümleme, eğitim, inceleme ve dışa aktarma tek ve kesintisiz bir akışta. Araç değiştirmek yok, terminal komutu yok, parçalı iş akışları yok. Eskiden birkaç uygulama gereken işler artık tek bir bütünleşik arayüzde.",
    "feat.caption": "Özellikler",
    "feat.captionRight": "Apple Silicon üzerinde kaydedildi",
    "feat.1t": "Yapay zekâ destekli süreç",
    "feat.1d": "Görüntü ve video işleme, maskeleme ve kamera hizalama otomatik yapılır. Görüntülerinizi veya videolarınızı yazılıma sürükleyip başlat'a tıklayın.",
    "feat.2t": "VRAM dostu",
    "feat.2d": "Sınırlı VRAM ile çok büyük sahneleri eğitin. **10 milyon** tam SH Gauss noktalı bir 4K veri kümesi **8 GB**'a sığar — pahalı bir iş istasyonu yerine bir dizüstü.",
    "feat.3t": "Yerel 360 desteği",
    "feat.3d": "Geniş balıkgözü ve eşit dikdörtgen çekimler doğrudan okunur. Düz görünüşe dönüştürme yok, dikiş yok, görüş alanı kaybı yok.",
    "feat.4t": "AMD / Mac eğitimi",
    "feat.4d": "AMD ve Apple Silicon (**M1–M4**) üzerinde Vulkan hızlandırmalı eğitim. Aynı süreç, aynı özellikler, aynı çıktı, CUDA gerekmez.",
    "feat.5t": "Doğru renk",
    "feat.5d": "Yeni bir düzeltme mekanizması pozlama, beyaz dengesi ve değişen ortam ışığını karşılar. Sıradan bir bilateral ızgara veya PPISP yüzeyleri renklendirir ya da sahneyi karartırken bizimki nötr kalır.",
    "feat.6t": "Uçuşan artıkları bastırma",
    "feat.6d": "Kendi geliştirdiğimiz mekanizma uçuşan artıkları ve yanlış saydamlıkları bastırır. Tek bir « **kapalı / orta / yüksek** » ayarıyla temiz, sızdırmaz yüzeyler.",
    "feat.7t": "Birleşik yoğunlaştırma",
    "feat.7d": "MCMC, IGS+ ve MRNF tek bir yoğunlaştırma stratejisinde birleşti — her sahnede seçim yapmadan hepsinin güçlü yanları.",
    "feat.8t": "Özgür ve açık kaynak",
    "feat.8d": "Lisans anahtarı yok, koltuk yok, filigran yok, buluta yükleme yok. Kaynağı okuyun, kendiniz derleyin, ürettiğiniz sizin kalsın.",

    /* Showcase */
    "show.view": "Sahneyi gör",
    "show.close": "Kapat",
    "show.capture": "Çekim",
    "show.train": "Eğitim süresi",
    "show.type": "Sahne türü",

    /* Download */
    "dl.head": "Bir kez kurun. Her yerde yeniden yapılandırın.",
    "dl.for": "{os} için indir",

    /* System requirements */
    "spec.title": "Önerilen minimum sistem",
    "spec.os": "İşletim sistemi",
    "spec.gpu": "GPU",
    "spec.cpu": "İşlemci",
    "spec.memory": "Bellek",
    "spec.storage": "Depolama",
    "spec.install": "Kurulum",

    /* Support */
    "sup.head": "Spirula'yı inşa eden makineleri finanse edin.",
    "sup.sub": "Spirula ücretsiz ve açık kaynak kalır. Ucu açık bağış istemek yerine, geliştirmeyi hızlandıran belirli donanımlar için kitlesel fon topluyor ve her katkının nereye gittiğini açıkça gösteriyoruz.",
    "sup.next": "Sıradaki hedef",
    "sup.purpose": "32 GB VRAM, sahneleri yaklaşık üç kat daha hızlı eğitip değerlendirmemizi ve mevcut donanımla ulaşamadığımız büyük sahne yolunu test etmemizi sağlar. Her sürüm bu sayede daha erken çıkar.",
    "sup.nextPurpose": "Spirula'nın Radeon'da da NVIDIA kadar iyi çalışması için profesyonel bir AMD GPU — her AMD hatası gerçek donanımda yeniden üretilip düzeltilir.",
    "sup.raisedLabel": "Şu ana kadar toplanan",
    "sup.toGo": "{amt} kaldı",
    "sup.amount": "Bir tutar seçin",
    "sup.freqOnce": "Tek seferlik",
    "sup.freqMonthly": "Aylık",
    "sup.customPh": "Diğer",
    "sup.back": "Bu hedefi destekle",
    "sup.note": "Ödeme GitHub Sponsors üzerinden USD olarak yapılır; aylık destek istediğiniz zaman iptal edilebilir.",
    "sup.ledgerTitle": "Paranın gittiği yer",
    "sup.ledgerEmpty": "Henüz satın alma yok — Radeon Pro W7800 ilk hedef. Her satın alma tarihi, tutarı ve fişiyle burada listelenecek.",

    /* Contact */
    "contact.head": "Geleceği birlikte kuralım.",
    "contact.sub": "Bir çekim, süreç entegrasyonu ya da yeniden üretilebilir bir hata hakkında — bize yazın, Spirula'yı geliştiren biri yanıtlar.",
    "contact.cta": "Bize ulaşın",

    /* Footer */
    "footer.tagline": "Sanal dünya kurucunuz",
    "footer.product": "Ürün",
    "footer.resources": "Kaynaklar",
    "footer.contactCol": "İletişim",
    "footer.sysreq": "Sistem gereksinimleri",
    "footer.release": "Sürüm notları",
    "footer.bug": "Hata bildir",
    "footer.request": "Özellik öner",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "Uygulama — GNU GPLv3",
    "footer.siteLicence": "Site — Tüm hakları saklıdır",
  },

  es: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Funciones",
    "nav.showcase": "Trabajos",
    "nav.download": "Descargar",
    "nav.donate": "Donar",
    "nav.support": "Apoyar",
    "nav.contact": "Contacto",

    /* Section eyebrows */
    "sec.features": "01 — Funciones",
    "sec.showcase": "02 — Trabajos",
    "sec.download": "03 — Descarga",
    "sec.support": "04 — Apóyanos",
    "sec.contact": "05 — Contacto",

    /* Hero */
    "hero.eyebrow": "Una app 3DGS todo en uno",
    "hero.sub": "Simplificamos la reconstrucción de escenas 3DGS y democratizamos los flujos de trabajo espaciales 3D de principio a fin.",
    "hero.cta1": "Trabajos",
    "hero.cta2": "Descargar",
    "hero.scroll": "Desplazar",

    /* Features */
    "feat.head": "Todo lo que la cadena necesita, en una sola ventana.",
    "feat.sub": "Importa, resuelve, entrena, inspecciona y exporta en un único flujo de trabajo continuo. Sin cambiar de herramienta, sin comandos de terminal, sin procesos fragmentados. Lo que antes exigía varias aplicaciones ahora es una sola interfaz unificada.",
    "feat.caption": "Funciones",
    "feat.captionRight": "Grabado en Apple Silicon",
    "feat.1t": "Cadena impulsada por IA",
    "feat.1d": "El procesamiento de imágenes y vídeo, el enmascarado y la alineación de cámaras son automáticos. Arrastra tus imágenes o vídeos al programa y pulsa Iniciar.",
    "feat.2t": "Eficiente en VRAM",
    "feat.2d": "Entrena escenas enormes con poca VRAM. Un conjunto 4K con **10 millones** de gaussianas de SH completa cabe en **8 GB**: un portátil en lugar de una costosa estación de trabajo.",
    "feat.3t": "Soporte 360 nativo",
    "feat.3d": "Las capturas de ojo de pez muy angular y equirrectangulares se leen directamente. Sin convertir a vistas rectilíneas, sin costuras, sin perder campo de visión.",
    "feat.4t": "Entrenamiento AMD / Mac",
    "feat.4d": "Entrenamiento acelerado por Vulkan en AMD y en Apple Silicon, **del M1 al M4**. Misma cadena, mismas funciones, mismos resultados, sin CUDA.",
    "feat.5t": "Color preciso",
    "feat.5d": "Un mecanismo de corrección inédito afronta la exposición, el balance de blancos y los cambios de luz ambiental. Donde una rejilla bilateral común o un PPISP tiñe las superficies u oscurece la escena, el nuestro se mantiene neutro.",
    "feat.6t": "Supresión de floaters",
    "feat.6d": "Nuestro mecanismo inédito suprime los floaters y las transparencias falsas. Superficies limpias y herméticas con un solo ajuste « **desactivado / medio / alto** ».",
    "feat.7t": "Densificación unificada",
    "feat.7d": "MCMC, IGS+ y MRNF fundidos en una sola estrategia de densificación: las ventajas de cada una, sin elegir escena por escena.",
    "feat.8t": "Libre y de código abierto",
    "feat.8d": "Sin claves de licencia, sin puestos, sin marcas de agua, sin subidas a la nube. Lee el código, compílalo tú mismo y quédate con lo que crees.",

    /* Showcase */
    "show.view": "Ver la escena",
    "show.close": "Cerrar",
    "show.capture": "Captura",
    "show.train": "Tiempo de entrenamiento",
    "show.type": "Tipo de escena",

    /* Download */
    "dl.head": "Instala una vez. Reconstruye donde sea.",
    "dl.for": "Descargar para {os}",

    /* System requirements */
    "spec.title": "Configuración mínima recomendada",
    "spec.os": "Sistema operativo",
    "spec.gpu": "GPU",
    "spec.cpu": "Procesador",
    "spec.memory": "Memoria",
    "spec.storage": "Almacenamiento",
    "spec.install": "Instalación",

    /* Support */
    "sup.head": "Financia las máquinas que construyen Spirula.",
    "sup.sub": "Spirula seguirá siendo gratuito y de código abierto. En lugar de pedir donaciones abiertas, financiamos hardware concreto que acelera el desarrollo — y mostramos exactamente a dónde va cada aportación.",
    "sup.next": "Próximo objetivo",
    "sup.purpose": "32 GB de VRAM permiten entrenar y evaluar escenas unas tres veces más rápido, y probar escenas grandes imposibles con el hardware actual. Cada versión llega antes.",
    "sup.nextPurpose": "Una GPU AMD profesional para que Spirula funcione en Radeon tan bien como en NVIDIA — cada error de AMD reproducido y corregido en hardware real.",
    "sup.raisedLabel": "Recaudado hasta ahora",
    "sup.toGo": "faltan {amt}",
    "sup.amount": "Elige un importe",
    "sup.freqOnce": "Único",
    "sup.freqMonthly": "Mensual",
    "sup.customPh": "Otro",
    "sup.back": "Apoyar este objetivo",
    "sup.note": "El pago se realiza en GitHub Sponsors en USD; el apoyo mensual se puede cancelar en cualquier momento.",
    "sup.ledgerTitle": "A dónde fue el dinero",
    "sup.ledgerEmpty": "Aún no se ha comprado nada — la Radeon Pro W7800 es el objetivo n.º 1. Cada compra se listará aquí con fecha, importe y recibo.",

    /* Contact */
    "contact.head": "Construyamos el futuro.",
    "contact.sub": "Dudas sobre una captura, una integración en tu cadena o un error reproducible — escríbenos y responde alguien que trabaja en Spirula.",
    "contact.cta": "Contáctanos",

    /* Footer */
    "footer.tagline": "Tu constructor de mundos virtuales",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.contactCol": "Contacto",
    "footer.sysreq": "Requisitos del sistema",
    "footer.release": "Notas de la versión",
    "footer.bug": "Informar de un error",
    "footer.request": "Sugerir una función",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Sitio — Todos los derechos reservados",
  },

  pt: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Recursos",
    "nav.showcase": "Trabalhos",
    "nav.download": "Baixar",
    "nav.donate": "Apoiar",
    "nav.support": "Apoiar",
    "nav.contact": "Contato",

    /* Section eyebrows */
    "sec.features": "01 — Recursos",
    "sec.showcase": "02 — Trabalhos",
    "sec.download": "03 — Download",
    "sec.support": "04 — Apoie-nos",
    "sec.contact": "05 — Contato",

    /* Hero */
    "hero.eyebrow": "Um app 3DGS completo",
    "hero.sub": "Simplificamos a reconstrução de cenas 3DGS e democratizamos fluxos de trabalho espaciais 3D de ponta a ponta.",
    "hero.cta1": "Trabalhos",
    "hero.cta2": "Baixar",
    "hero.scroll": "Rolar",

    /* Features */
    "feat.head": "Tudo o que o pipeline exige, em uma única janela.",
    "feat.sub": "Importe, resolva, treine, inspecione e exporte em um único fluxo de trabalho contínuo. Sem trocar de ferramenta, sem comandos no terminal, sem pipelines fragmentados. O que antes exigia vários aplicativos agora é uma única interface unificada.",
    "feat.caption": "Funcionalidades",
    "feat.captionRight": "Gravado em Apple Silicon",
    "feat.1t": "Pipeline com IA",
    "feat.1d": "O processamento de imagens e vídeo, o mascaramento e o alinhamento de câmeras são automáticos. Arraste suas imagens ou vídeos para o programa e clique em Iniciar.",
    "feat.2t": "Eficiente em VRAM",
    "feat.2d": "Treine cenas enormes com pouca VRAM. Um conjunto 4K com **10 milhões** de gaussianas de SH completa cabe em **8 GB** — um notebook em vez de uma estação de trabalho caríssima.",
    "feat.3t": "Suporte 360 nativo",
    "feat.3d": "Capturas fisheye de grande abertura e equirretangulares são lidas diretamente. Sem conversão para vistas retilíneas, sem emendas, sem perda de campo de visão.",
    "feat.4t": "Treino AMD / Mac",
    "feat.4d": "Treino acelerado por Vulkan em AMD e em Apple Silicon, **do M1 ao M4**. Mesmo pipeline, mesmos recursos, mesmos resultados, sem CUDA.",
    "feat.5t": "Cor precisa",
    "feat.5d": "Um mecanismo de correção inédito lida com exposição, balanço de branco e mudanças na luz do ambiente. Onde uma grade bilateral comum ou um PPISP tinge superfícies ou escurece a cena, o nosso permanece neutro.",
    "feat.6t": "Supressão de floaters",
    "feat.6d": "Nosso mecanismo inédito suprime floaters e transparências falsas. Superfícies limpas e estanques com um único ajuste « **desligado / médio / alto** ».",
    "feat.7t": "Densificação unificada",
    "feat.7d": "MCMC, IGS+ e MRNF combinados em uma única estratégia de densificação — as vantagens de cada uma, sem escolher cena por cena.",
    "feat.8t": "Livre e de código aberto",
    "feat.8d": "Sem chaves de licença, sem assentos, sem marca d'água, sem envio para a nuvem. Leia o código, compile você mesmo e fique com o que criar.",

    /* Showcase */
    "show.view": "Ver a cena",
    "show.close": "Fechar",
    "show.capture": "Captura",
    "show.train": "Tempo de treino",
    "show.type": "Tipo de cena",

    /* Download */
    "dl.head": "Instale uma vez. Reconstrua em qualquer lugar.",
    "dl.for": "Baixar para {os}",

    /* System requirements */
    "spec.title": "Configuração mínima recomendada",
    "spec.os": "Sistema operacional",
    "spec.gpu": "GPU",
    "spec.cpu": "Processador",
    "spec.memory": "Memória",
    "spec.storage": "Armazenamento",
    "spec.install": "Instalação",

    /* Support */
    "sup.head": "Financie as máquinas que constroem o Spirula.",
    "sup.sub": "O Spirula continua gratuito e de código aberto. Em vez de pedir doações sem fim, financiamos hardware específico que acelera o desenvolvimento — e mostramos exatamente para onde vai cada contribuição.",
    "sup.next": "Próxima meta",
    "sup.purpose": "32 GB de VRAM permitem treinar e avaliar cenas cerca de três vezes mais rápido e testar cenas grandes impossíveis no hardware atual. Cada versão chega mais cedo.",
    "sup.nextPurpose": "Uma GPU AMD profissional para que o Spirula rode no Radeon tão bem quanto na NVIDIA — cada bug de AMD reproduzido e corrigido em hardware real.",
    "sup.raisedLabel": "Arrecadado até agora",
    "sup.toGo": "faltam {amt}",
    "sup.amount": "Escolha um valor",
    "sup.freqOnce": "Único",
    "sup.freqMonthly": "Mensal",
    "sup.customPh": "Outro",
    "sup.back": "Apoiar esta meta",
    "sup.note": "O pagamento é feito no GitHub Sponsors em USD; o apoio mensal pode ser cancelado a qualquer momento.",
    "sup.ledgerTitle": "Para onde foi o dinheiro",
    "sup.ledgerEmpty": "Nada comprado ainda — a Radeon Pro W7800 é a meta nº 1. Cada compra será listada aqui com data, valor e recibo.",

    /* Contact */
    "contact.head": "Vamos construir o futuro.",
    "contact.sub": "Dúvidas sobre uma captura, integração de pipeline ou um bug reproduzível — escreva para nós; quem responde trabalha no Spirula.",
    "contact.cta": "Fale com a gente",

    /* Footer */
    "footer.tagline": "Seu construtor de mundos virtuais",
    "footer.product": "Produto",
    "footer.resources": "Recursos",
    "footer.contactCol": "Contato",
    "footer.sysreq": "Requisitos do sistema",
    "footer.release": "Notas de versão",
    "footer.bug": "Relatar um bug",
    "footer.request": "Sugerir um recurso",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Site — Todos os direitos reservados",
  },

  ru: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Возможности",
    "nav.showcase": "Работы",
    "nav.download": "Скачать",
    "nav.donate": "Поддержать",
    "nav.support": "Поддержать",
    "nav.contact": "Контакты",

    /* Section eyebrows */
    "sec.features": "01 — Возможности",
    "sec.showcase": "02 — Работы",
    "sec.download": "03 — Загрузка",
    "sec.support": "04 — Поддержать",
    "sec.contact": "05 — Контакты",

    /* Hero */
    "hero.eyebrow": "Универсальное приложение для 3DGS",
    "hero.sub": "Мы упрощаем реконструкцию 3DGS-сцен и делаем сквозные трёхмерные процессы доступными каждому.",
    "hero.cta1": "Работы",
    "hero.cta2": "Скачать",
    "hero.scroll": "Прокрутить",

    /* Features */
    "feat.head": "Всё, что нужно конвейеру, в одном окне.",
    "feat.sub": "Импорт, расчёт, обучение, проверка и экспорт — в одном непрерывном рабочем процессе. Никаких переключений между инструментами, команд в терминале и разрозненных пайплайнов. То, что раньше требовало нескольких программ, теперь стало единым интерфейсом.",
    "feat.caption": "Возможности",
    "feat.captionRight": "Записано на Apple Silicon",
    "feat.1t": "Конвейер на базе ИИ",
    "feat.1d": "Обработка изображений и видео, маскирование и выравнивание камер выполняются автоматически. Просто перетащите изображения или видео в программу и нажмите «Начать».",
    "feat.2t": "Экономия видеопамяти",
    "feat.2d": "Обучайте огромные сцены на скромной видеопамяти. Набор 4K с **10 миллионами** гауссиан с полными SH укладывается в **8 ГБ** — ноутбук вместо дорогой рабочей станции.",
    "feat.3t": "Нативная поддержка 360",
    "feat.3d": "Широкоугольные «рыбий глаз» и равнопромежуточные съёмки читаются напрямую. Без перевода в перспективу, без швов, без потери поля зрения.",
    "feat.4t": "Обучение на AMD / Mac",
    "feat.4d": "Обучение с ускорением Vulkan на AMD и на Apple Silicon, **от M1 до M4**. Тот же конвейер, те же возможности, тот же результат, CUDA не нужна.",
    "feat.5t": "Точный цвет",
    "feat.5d": "Новый механизм коррекции учитывает экспозицию, баланс белого и смену внешнего освещения. Там, где обычная билатеральная сетка или PPISP окрашивает поверхности или затемняет сцену, наш остаётся нейтральным.",
    "feat.6t": "Подавление флоатеров",
    "feat.6d": "Наш новый механизм подавляет флоатеры и ложную прозрачность. Чистые, герметичные поверхности одной настройкой «**выкл. / умеренно / сильно**».",
    "feat.7t": "Единая денсификация",
    "feat.7d": "MCMC, IGS+ и MRNF объединены в одну стратегию уплотнения — сильные стороны каждой, без выбора под каждую сцену.",
    "feat.8t": "Свободно и с открытым кодом",
    "feat.8d": "Никаких лицензионных ключей, мест, водяных знаков и загрузки в облако. Читайте исходники, собирайте сами и оставляйте себе всё, что сделали.",

    /* Showcase */
    "show.view": "Смотреть сцену",
    "show.close": "Закрыть",
    "show.capture": "Съёмка",
    "show.train": "Время обучения",
    "show.type": "Тип сцены",

    /* Download */
    "dl.head": "Установите один раз. Реконструируйте где угодно.",
    "dl.for": "Скачать для {os}",

    /* System requirements */
    "spec.title": "Рекомендуемая минимальная конфигурация",
    "spec.os": "Система",
    "spec.gpu": "GPU",
    "spec.cpu": "Процессор",
    "spec.memory": "Память",
    "spec.storage": "Хранилище",
    "spec.install": "Установка",

    /* Support */
    "sup.head": "Соберём машины, на которых делают Spirula.",
    "sup.sub": "Spirula остаётся бесплатной и открытой. Вместо бессрочных донатов мы собираем средства на конкретное оборудование, ускоряющее разработку, и показываем, куда идёт каждый взнос.",
    "sup.next": "Следующая цель",
    "sup.purpose": "32 ГБ видеопамяти позволяют обучать и оценивать сцены примерно в три раза быстрее и тестировать крупные сцены, недоступные на текущем железе. Каждый релиз выходит раньше.",
    "sup.nextPurpose": "Профессиональная видеокарта AMD, чтобы Spirula работала на Radeon так же хорошо, как на NVIDIA — каждый баг AMD воспроизводится и исправляется на реальном железе.",
    "sup.raisedLabel": "Собрано на сегодня",
    "sup.toGo": "осталось {amt}",
    "sup.amount": "Выберите сумму",
    "sup.freqOnce": "Разовый",
    "sup.freqMonthly": "Ежемесячно",
    "sup.customPh": "Другая",
    "sup.back": "Поддержать эту цель",
    "sup.note": "Оплата проходит через GitHub Sponsors в долларах США; ежемесячную поддержку можно отменить в любой момент.",
    "sup.ledgerTitle": "Куда пошли деньги",
    "sup.ledgerEmpty": "Пока ничего не куплено — Radeon Pro W7800 — цель №1. Каждая покупка появится здесь с датой, суммой и чеком.",

    /* Contact */
    "contact.head": "Построим будущее вместе.",
    "contact.sub": "Вопросы о съёмке, интеграции в конвейер или воспроизводимой ошибке — напишите нам, ответит тот, кто делает Spirula.",
    "contact.cta": "Связаться с нами",

    /* Footer */
    "footer.tagline": "Ваш конструктор виртуальных миров",
    "footer.product": "Продукт",
    "footer.resources": "Материалы",
    "footer.contactCol": "Контакты",
    "footer.sysreq": "Системные требования",
    "footer.release": "История версий",
    "footer.bug": "Сообщить об ошибке",
    "footer.request": "Предложить функцию",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "ПО — GNU GPLv3",
    "footer.siteLicence": "Сайт — Все права защищены",
  },

  de: {
    /* Brand */
    "brand.wordmark": "Spirula Studio",
    "brand.hero": { accent: "Spirula", rest: " Studio" },

    /* Navigation */
    "nav.features": "Funktionen",
    "nav.showcase": "Projekte",
    "nav.download": "Download",
    "nav.donate": "Unterstützen",
    "nav.support": "Unterstützen",
    "nav.contact": "Kontakt",

    /* Section eyebrows */
    "sec.features": "01 — Funktionen",
    "sec.showcase": "02 — Projekte",
    "sec.download": "03 — Download",
    "sec.support": "04 — Unterstützen",
    "sec.contact": "05 — Kontakt",

    /* Hero */
    "hero.eyebrow": "Eine 3DGS-App für alles",
    "hero.sub": "Wir vereinfachen die 3DGS-Szenenrekonstruktion und machen durchgängige 3D-Workflows für alle zugänglich.",
    "hero.cta1": "Projekte",
    "hero.cta2": "Download",
    "hero.scroll": "Scrollen",

    /* Features */
    "feat.head": "Alles, was die Pipeline braucht, in einem Fenster.",
    "feat.sub": "Importieren, lösen, trainieren, prüfen und exportieren in einem durchgehenden Arbeitsablauf. Kein Werkzeugwechsel, keine Terminalbefehle, keine zerstückelten Pipelines. Was früher mehrere Anwendungen brauchte, ist jetzt eine einzige, einheitliche Oberfläche.",
    "feat.caption": "Funktionen",
    "feat.captionRight": "Aufgenommen auf Apple Silicon",
    "feat.1t": "KI-gestützte Pipeline",
    "feat.1d": "Bild- und Videoverarbeitung, Maskierung und Kameraausrichtung laufen automatisch. Ziehen Sie Ihre Bilder oder Videos in die Software und klicken Sie auf Start.",
    "feat.2t": "VRAM-effizient",
    "feat.2d": "Große Szenen mit wenig VRAM trainieren. Ein 4K-Datensatz mit **10 Millionen** vollen SH-Gaussians passt in **8 GB** — ein Laptop statt einer teuren Workstation.",
    "feat.3t": "Native 360-Unterstützung",
    "feat.3d": "Weitwinkel-Fisheye- und equirektangulare Aufnahmen werden direkt eingelesen. Keine Umwandlung in Zentralprojektion, keine Nähte, kein verlorenes Blickfeld.",
    "feat.4t": "AMD / Mac-Training",
    "feat.4d": "Vulkan-beschleunigtes Training auf AMD und auf Apple Silicon, **M1 bis M4**. Dieselbe Pipeline, dieselben Funktionen, dieselben Ergebnisse, kein CUDA nötig.",
    "feat.5t": "Farbtreue",
    "feat.5d": "Ein neuartiger Korrekturmechanismus fängt Belichtung, Weißabgleich und wechselndes Umgebungslicht ab. Wo ein einfaches bilaterales Gitter oder PPISP Flächen verfärbt oder die Szene abdunkelt, bleibt unseres neutral.",
    "feat.6t": "Floater-Unterdrückung",
    "feat.6d": "Unser neuartiger Mechanismus unterdrückt Floater und falsche Transparenzen. Saubere, dichte Oberflächen über eine einzige Einstellung « **aus / mild / hoch** ».",
    "feat.7t": "Vereinheitlichte Densifizierung",
    "feat.7d": "MCMC, IGS+ und MRNF in einer einzigen Densifizierungsstrategie vereint — die Stärken von allen, ohne pro Szene wählen zu müssen.",
    "feat.8t": "Frei und Open Source",
    "feat.8d": "Keine Lizenzschlüssel, keine Plätze, keine Wasserzeichen, kein Cloud-Upload. Lesen Sie den Quellcode, bauen Sie ihn selbst, und behalten Sie, was Sie erstellen.",

    /* Showcase */
    "show.view": "Szene ansehen",
    "show.close": "Schließen",
    "show.capture": "Aufnahme",
    "show.train": "Trainingszeit",
    "show.type": "Szenentyp",

    /* Download */
    "dl.head": "Einmal installieren. Überall rekonstruieren.",
    "dl.for": "Download für {os}",

    /* System requirements */
    "spec.title": "Empfohlene Mindestkonfiguration",
    "spec.os": "Betriebssystem",
    "spec.gpu": "GPU",
    "spec.cpu": "Prozessor",
    "spec.memory": "Speicher",
    "spec.storage": "Festplatte",
    "spec.install": "Installationsaufwand",

    /* Support */
    "sup.head": "Finanziere die Maschinen, die Spirula bauen.",
    "sup.sub": "Spirula bleibt kostenlos und Open Source. Statt offener Spenden finanzieren wir gezielt die Hardware, die die Entwicklung beschleunigt — und zeigen genau, wohin jeder Beitrag geht.",
    "sup.next": "Nächstes Ziel",
    "sup.purpose": "32 GB VRAM lassen uns Szenen etwa dreimal schneller trainieren und auswerten und große Szenen testen, die mit der aktuellen Hardware nicht möglich sind. Jedes Release erscheint dadurch früher.",
    "sup.nextPurpose": "Eine professionelle AMD-GPU, damit Spirula auf Radeon genauso gut läuft wie auf NVIDIA — jeder AMD-Bug wird auf echter Hardware reproduziert und behoben.",
    "sup.raisedLabel": "Bisher gesammelt",
    "sup.toGo": "noch {amt}",
    "sup.amount": "Betrag wählen",
    "sup.freqOnce": "Einmalig",
    "sup.freqMonthly": "Monatlich",
    "sup.customPh": "Anderer",
    "sup.back": "Dieses Ziel unterstützen",
    "sup.note": "Die Zahlung läuft über GitHub Sponsors in USD; monatliche Unterstützung ist jederzeit kündbar.",
    "sup.ledgerTitle": "Wohin das Geld ging",
    "sup.ledgerEmpty": "Noch nichts gekauft — die Radeon Pro W7800 ist Ziel Nr. 1. Jeder Kauf wird hier mit Datum, Betrag und Beleg aufgeführt.",

    /* Contact */
    "contact.head": "Lass uns die Zukunft bauen.",
    "contact.sub": "Fragen zu einer Aufnahme, einer Pipeline-Integration oder einem reproduzierbaren Fehler — schreib uns, es antwortet jemand, der an Spirula arbeitet.",
    "contact.cta": "Kontakt aufnehmen",

    /* Footer */
    "footer.tagline": "Dein Baukasten für virtuelle Welten",
    "footer.product": "Produkt",
    "footer.resources": "Ressourcen",
    "footer.contactCol": "Kontakt",
    "footer.sysreq": "Systemanforderungen",
    "footer.release": "Versionshinweise",
    "footer.bug": "Fehler melden",
    "footer.request": "Funktion vorschlagen",
    "footer.rights": "© 2026 Spirula Studio",
    "footer.appLicence": "App — GNU GPLv3",
    "footer.siteLicence": "Website — Alle Rechte vorbehalten",
  },
};

const SCENES = {

  en: [
    {
      title:    "St Paul's Cathedral",
      place:    "London",
      category: "Interior · 360 capture",
      capture:  "360 capture · 1,240 frames",
      train:    "12 min",
      type:     "Interior",
      body:     "Shot in a single handheld 360 pass under mixed daylight and tungsten. Native equirectangular ingest kept the dome geometry intact without unwrapping to pinhole views.",
    },
    {
      title:    "Business Park",
      place:    "Toronto",
      category: "Exterior · drone video",
      capture:  "Drone video · 860 frames",
      train:    "9 min",
      type:     "Exterior",
      body:     "A two-orbit drone pass at 4K. Glass facades and repeated mullions are the classic failure case for splatting; the pipeline resolved reflections without hand masking.",
    },
    {
      title:    "Royal York Lobby",
      place:    "Toronto",
      category: "Interior · handheld",
      capture:  "Handheld video · 1,050 frames",
      train:    "11 min",
      type:     "Interior",
      body:     "Low light, gilded detail and heavy foot traffic. Transient pedestrians were rejected automatically, leaving a clean plate at full ornamental fidelity.",
    },
    {
      title:    "Canal Street",
      place:    "Amsterdam",
      category: "Streetscape · walkthrough",
      capture:  "Walkthrough · 1,600 frames",
      train:    "16 min",
      type:     "Streetscape",
      body:     "A 400-metre walk along the canal reconstructed as one continuous scene, trained end to end on an M3 Max inside 8 GB of unified memory.",
    },
    {
      title:    "Godiva Atrium",
      place:    "Coventry",
      category: "Atrium · image set",
      capture:  "Image set · 420 stills",
      train:    "6 min",
      type:     "Atrium",
      body:     "Stills only, no video and no COLMAP pre-pass. Fewer than five hundred photos to a navigable splat in under ten minutes.",
    },
  ],

  zh: [
    {
      title:    "圣保罗大教堂",
      place:    "伦敦",
      category: "室内 · 360 采集",
      capture:  "360 采集 · 1,240 帧",
      train:    "12 分钟",
      type:     "室内",
      body:     "在日光与钨丝灯混合光照下，用手持设备一次全景走位完成拍摄。原生全景读取完整保留了穹顶结构，无需转换为透视视图。",
    },
    {
      title:    "商务园区",
      place:    "多伦多",
      category: "室外 · 无人机视频",
      capture:  "无人机视频 · 860 帧",
      train:    "9 分钟",
      type:     "室外",
      body:     "4K 画质下的两圈环绕航拍。玻璃幕墙与重复的窗框是高斯泼溅的经典难题，本流程无需手工遮罩即还原了反射。",
    },
    {
      title:    "皇家约克酒店大堂",
      place:    "多伦多",
      category: "室内 · 手持拍摄",
      capture:  "手持视频 · 1,050 帧",
      train:    "11 分钟",
      type:     "室内",
      body:     "弱光环境、繁复的金饰细节与密集人流。系统自动剔除了移动的行人，留下细节完整的干净画面。",
    },
    {
      title:    "运河街道",
      place:    "阿姆斯特丹",
      category: "街景 · 行走拍摄",
      capture:  "行走拍摄 · 1,600 帧",
      train:    "16 分钟",
      type:     "街景",
      body:     "沿运河步行 400 米，重建为一个连续场景，全程在 M3 Max 上以 8 GB 统一内存完成训练。",
    },
    {
      title:    "戈黛娃中庭",
      place:    "考文垂",
      category: "中庭 · 图像序列",
      capture:  "图像序列 · 420 张",
      train:    "6 分钟",
      type:     "中庭",
      body:     "仅使用静态照片，无视频，也无需 COLMAP 预处理。不到五百张照片，十分钟内即可生成可自由漫游的场景。",
    },
  ],

  "zh-Hant": [
    {
      title:    "聖保羅大教堂",
      place:    "倫敦",
      category: "室內 · 360 採集",
      capture:  "360 採集 · 1,240 影格",
      train:    "12 分鐘",
      type:     "室內",
      body:     "在日光與鎢絲燈混合光照下，以手持裝置一次環景走位完成拍攝。原生環景讀取完整保留了穹頂結構，無需轉換為透視視圖。",
    },
    {
      title:    "商務園區",
      place:    "多倫多",
      category: "室外 · 無人機影片",
      capture:  "無人機影片 · 860 影格",
      train:    "9 分鐘",
      type:     "室外",
      body:     "4K 畫質下的兩圈環繞航拍。玻璃幕牆與重複的窗框是高斯潑濺的經典難題，本流程無需手工遮罩即還原了反射。",
    },
    {
      title:    "皇家約克飯店大廳",
      place:    "多倫多",
      category: "室內 · 手持拍攝",
      capture:  "手持影片 · 1,050 影格",
      train:    "11 分鐘",
      type:     "室內",
      body:     "弱光環境、繁複的金飾細節與密集人流。系統自動剔除了移動的行人，留下細節完整的乾淨畫面。",
    },
    {
      title:    "運河街道",
      place:    "阿姆斯特丹",
      category: "街景 · 行走拍攝",
      capture:  "行走拍攝 · 1,600 影格",
      train:    "16 分鐘",
      type:     "街景",
      body:     "沿運河步行 400 公尺，重建為一個連續場景，全程在 M3 Max 上以 8 GB 統一記憶體完成訓練。",
    },
    {
      title:    "戈黛娃中庭",
      place:    "考文垂",
      category: "中庭 · 影像序列",
      capture:  "影像序列 · 420 張",
      train:    "6 分鐘",
      type:     "中庭",
      body:     "僅使用靜態照片，無影片，也無需 COLMAP 預處理。不到五百張照片，十分鐘內即可生成可自由漫遊的場景。",
    },
  ],

  ja: [
    {
      title:    "セント・ポール大聖堂",
      place:    "ロンドン",
      category: "屋内 · 360 撮影",
      capture:  "360 撮影 · 1,240 フレーム",
      train:    "12 分",
      type:     "屋内",
      body:     "自然光とタングステン光が混在する環境で、手持ちの360度パス一回のみで撮影。正距円筒のまま取り込むことで、ドーム構造をそのまま保持しました。",
    },
    {
      title:    "ビジネスパーク",
      place:    "トロント",
      category: "屋外 · ドローン撮影",
      capture:  "ドローン映像 · 860 フレーム",
      train:    "9 分",
      type:     "屋外",
      body:     "4Kで二周のドローン撮影。ガラス外壁と反復する方立はスプラッティングの典型的な難所ですが、手作業のマスクなしで反射を解決しました。",
    },
    {
      title:    "ロイヤルヨーク ロビー",
      place:    "トロント",
      category: "屋内 · 手持ち撮影",
      capture:  "手持ち映像 · 1,050 フレーム",
      train:    "11 分",
      type:     "屋内",
      body:     "低照度、金装飾の細部、そして多い人通り。通行人は自動的に除去され、装飾の精度を保ったクリーンな画が残りました。",
    },
    {
      title:    "運河沿いの街路",
      place:    "アムステルダム",
      category: "街景 · ウォークスルー",
      capture:  "ウォークスルー · 1,600 フレーム",
      train:    "16 分",
      type:     "街景",
      body:     "運河沿い400メートルの歩行を一続きのシーンとして再構築。M3 Max の統合メモリ8GB内で最後まで学習しました。",
    },
    {
      title:    "ゴディバ アトリウム",
      place:    "コヴェントリー",
      category: "アトリウム · 静止画",
      capture:  "静止画 · 420 枚",
      train:    "6 分",
      type:     "アトリウム",
      body:     "静止画のみ、動画もCOLMAPの前処理もなし。500枚未満の写真から、10分以内に自由に動けるスプラットへ。",
    },
  ],

  ko: [
    {
      title:    "세인트 폴 대성당",
      place:    "런던",
      category: "실내 · 360 촬영",
      capture:  "360 촬영 · 1,240 프레임",
      train:    "12분",
      type:     "실내",
      body:     "자연광과 텅스텐 조명이 섞인 환경에서 핸드헬드 360 패스 한 번으로 촬영했습니다. 등장방형 그대로 읽어 돔 구조를 온전히 보존했습니다.",
    },
    {
      title:    "비즈니스 파크",
      place:    "토론토",
      category: "실외 · 드론 영상",
      capture:  "드론 영상 · 860 프레임",
      train:    "9분",
      type:     "실외",
      body:     "4K로 두 바퀴 선회 촬영. 유리 파사드와 반복되는 창틀은 스플래팅의 대표적 난제지만, 수동 마스킹 없이 반사를 해결했습니다.",
    },
    {
      title:    "로열 요크 로비",
      place:    "토론토",
      category: "실내 · 핸드헬드",
      capture:  "핸드헬드 영상 · 1,050 프레임",
      train:    "11분",
      type:     "실내",
      body:     "어두운 조명, 금장 디테일, 많은 인파. 이동하는 행인은 자동으로 제거되어 장식의 정밀도를 유지한 깨끗한 장면이 남았습니다.",
    },
    {
      title:    "운하 거리",
      place:    "암스테르담",
      category: "거리 풍경 · 워크스루",
      capture:  "워크스루 · 1,600 프레임",
      train:    "16분",
      type:     "거리 풍경",
      body:     "운하를 따라 400미터를 걸으며 하나의 연속된 장면으로 재구성했고, M3 Max의 통합 메모리 8GB 안에서 끝까지 학습했습니다.",
    },
    {
      title:    "고디바 아트리움",
      place:    "코번트리",
      category: "아트리움 · 이미지 세트",
      capture:  "이미지 세트 · 420장",
      train:    "6분",
      type:     "아트리움",
      body:     "정지 이미지만, 영상도 COLMAP 전처리도 없이. 500장 미만의 사진으로 10분 안에 자유롭게 둘러보는 스플랫이 됩니다.",
    },
  ],

  fr: [
    {
      title:    "Cathédrale Saint-Paul",
      place:    "Londres",
      category: "Intérieur · capture 360",
      capture:  "Capture 360 · 1 240 images",
      train:    "12 min",
      type:     "Intérieur",
      body:     "Tournée en une seule passe 360 à main levée sous lumière du jour et tungstène mêlés. L'ingestion équirectangulaire native a préservé la géométrie du dôme sans conversion en vues rectilignes.",
    },
    {
      title:    "Parc d'affaires",
      place:    "Toronto",
      category: "Extérieur · vidéo drone",
      capture:  "Vidéo drone · 860 images",
      train:    "9 min",
      type:     "Extérieur",
      body:     "Deux orbites de drone en 4K. Les façades vitrées et les meneaux répétés sont l'écueil classique du splatting ; la chaîne a résolu les reflets sans masquage manuel.",
    },
    {
      title:    "Hall du Royal York",
      place:    "Toronto",
      category: "Intérieur · à main levée",
      capture:  "Vidéo à main levée · 1 050 images",
      train:    "11 min",
      type:     "Intérieur",
      body:     "Faible lumière, dorures fines et passage dense. Les passants ont été écartés automatiquement, laissant une plaque nette à pleine fidélité ornementale.",
    },
    {
      title:    "Rue du canal",
      place:    "Amsterdam",
      category: "Rue · déambulation",
      capture:  "Déambulation · 1 600 images",
      train:    "16 min",
      type:     "Rue",
      body:     "400 mètres de marche le long du canal reconstruits en une seule scène continue, entraînée de bout en bout sur un M3 Max dans 8 Go de mémoire unifiée.",
    },
    {
      title:    "Atrium Godiva",
      place:    "Coventry",
      category: "Atrium · série d'images",
      capture:  "Série d'images · 420 photos",
      train:    "6 min",
      type:     "Atrium",
      body:     "Photos seules, sans vidéo ni pré-passe COLMAP. Moins de cinq cents images pour un splat navigable en moins de dix minutes.",
    },
  ],

  nl: [
    {
      title:    "St Paul's Cathedral",
      place:    "Londen",
      category: "Interieur · 360-opname",
      capture:  "360-opname · 1.240 frames",
      train:    "12 min",
      type:     "Interieur",
      body:     "Opgenomen in één handheld 360-passage bij gemengd daglicht en kunstlicht. Door de equirectangulaire opname direct in te lezen bleef de koepelgeometrie intact.",
    },
    {
      title:    "Bedrijvenpark",
      place:    "Toronto",
      category: "Exterieur · dronevideo",
      capture:  "Dronevideo · 860 frames",
      train:    "9 min",
      type:     "Exterieur",
      body:     "Twee dronerondes in 4K. Glazen gevels en herhaalde roeden zijn de klassieke valkuil van splatting; de pijplijn loste de reflecties op zonder handmatig maskeren.",
    },
    {
      title:    "Royal York-lobby",
      place:    "Toronto",
      category: "Interieur · handheld",
      capture:  "Handheldvideo · 1.050 frames",
      train:    "11 min",
      type:     "Interieur",
      body:     "Weinig licht, verguld detail en veel loop. Voorbijgangers werden automatisch verworpen, wat een schone plaat opleverde met volledige ornamentiek.",
    },
    {
      title:    "Grachtenstraat",
      place:    "Amsterdam",
      category: "Straatbeeld · walkthrough",
      capture:  "Walkthrough · 1.600 frames",
      train:    "16 min",
      type:     "Straatbeeld",
      body:     "400 meter langs de gracht gereconstrueerd als één doorlopende scène, van begin tot eind getraind op een M3 Max binnen 8 GB unified memory.",
    },
    {
      title:    "Godiva-atrium",
      place:    "Coventry",
      category: "Atrium · fotoreeks",
      capture:  "Fotoreeks · 420 foto's",
      train:    "6 min",
      type:     "Atrium",
      body:     "Alleen foto's, geen video en geen COLMAP-voorbewerking. Minder dan vijfhonderd opnamen naar een navigeerbare splat in onder tien minuten.",
    },
  ],

  it: [
    {
      title:    "Cattedrale di St Paul",
      place:    "Londra",
      category: "Interni · ripresa 360",
      capture:  "Ripresa 360 · 1.240 fotogrammi",
      train:    "12 min",
      type:     "Interni",
      body:     "Girato in un'unica passata 360 a mano libera con luce diurna e tungsteno mescolate. L'ingesto equirettangolare nativo ha preservato la geometria della cupola.",
    },
    {
      title:    "Parco uffici",
      place:    "Toronto",
      category: "Esterni · video drone",
      capture:  "Video drone · 860 fotogrammi",
      train:    "9 min",
      type:     "Esterni",
      body:     "Due orbite di drone in 4K. Facciate in vetro e montanti ripetuti sono l'ostacolo classico dello splatting; la pipeline ha risolto i riflessi senza mascherature manuali.",
    },
    {
      title:    "Hall del Royal York",
      place:    "Toronto",
      category: "Interni · a mano libera",
      capture:  "Video a mano · 1.050 fotogrammi",
      train:    "11 min",
      type:     "Interni",
      body:     "Poca luce, dettagli dorati e molto passaggio. I passanti sono stati scartati automaticamente, lasciando una lastra pulita a piena fedeltà ornamentale.",
    },
    {
      title:    "Strada del canale",
      place:    "Amsterdam",
      category: "Scena urbana · camminata",
      capture:  "Camminata · 1.600 fotogrammi",
      train:    "16 min",
      type:     "Scena urbana",
      body:     "400 metri lungo il canale ricostruiti come una scena continua, addestrata da capo a fondo su un M3 Max entro 8 GB di memoria unificata.",
    },
    {
      title:    "Atrio Godiva",
      place:    "Coventry",
      category: "Atrio · set di immagini",
      capture:  "Set di immagini · 420 scatti",
      train:    "6 min",
      type:     "Atrio",
      body:     "Solo fotogrammi fissi, nessun video e nessuna pre-elaborazione COLMAP. Meno di cinquecento foto per uno splat navigabile in meno di dieci minuti.",
    },
  ],

  tr: [
    {
      title:    "St Paul Katedrali",
      place:    "Londra",
      category: "İç mekân · 360 çekim",
      capture:  "360 çekim · 1.240 kare",
      train:    "12 dk",
      type:     "İç mekân",
      body:     "Gün ışığı ve tungsten ışığın karıştığı ortamda tek bir elde tutulan 360 geçişle çekildi. Eşit dikdörtgen kaydın doğrudan okunması kubbe geometrisini olduğu gibi korudu.",
    },
    {
      title:    "İş Parkı",
      place:    "Toronto",
      category: "Dış mekân · drone videosu",
      capture:  "Drone videosu · 860 kare",
      train:    "9 dk",
      type:     "Dış mekân",
      body:     "4K'da iki turlu drone geçişi. Cam cepheler ve yinelenen kayıtlar splatting'in klasik zorluğudur; süreç yansımaları elle maskeleme olmadan çözdü.",
    },
    {
      title:    "Royal York Lobisi",
      place:    "Toronto",
      category: "İç mekân · elde çekim",
      capture:  "Elde çekim · 1.050 kare",
      train:    "11 dk",
      type:     "İç mekân",
      body:     "Az ışık, yoğun altın işlemeler ve kalabalık geçiş. Hareket eden yayalar otomatik olarak ayıklandı ve süsleme netliği korunmuş temiz bir görüntü kaldı.",
    },
    {
      title:    "Kanal Sokağı",
      place:    "Amsterdam",
      category: "Sokak dokusu · yürüyüş",
      capture:  "Yürüyüş · 1.600 kare",
      train:    "16 dk",
      type:     "Sokak dokusu",
      body:     "Kanal boyunca 400 metrelik yürüyüş tek sürekli sahne olarak yeniden kuruldu; baştan sona bir M3 Max üzerinde 8 GB birleşik bellekte eğitildi.",
    },
    {
      title:    "Godiva Atriumu",
      place:    "Coventry",
      category: "Atrium · görüntü seti",
      capture:  "Görüntü seti · 420 kare",
      train:    "6 dk",
      type:     "Atrium",
      body:     "Yalnızca durağan görüntüler; video da COLMAP ön işlemi de yok. Beş yüzden az fotoğraftan on dakikanın altında gezilebilir bir splat.",
    },
  ],

  es: [
    {
      title:    "Catedral de San Pablo",
      place:    "Londres",
      category: "Interior · captura 360",
      capture:  "Captura 360 · 1.240 fotogramas",
      train:    "12 min",
      type:     "Interior",
      body:     "Rodado en una sola pasada 360 a mano con luz de día y tungsteno mezcladas. La lectura equirrectangular nativa conservó la geometría de la cúpula sin convertirla a vistas rectilíneas.",
    },
    {
      title:    "Parque empresarial",
      place:    "Toronto",
      category: "Exterior · vídeo con dron",
      capture:  "Vídeo con dron · 860 fotogramas",
      train:    "9 min",
      type:     "Exterior",
      body:     "Dos órbitas de dron en 4K. Las fachadas de cristal y los parteluces repetidos son el fallo clásico del splatting; la cadena resolvió los reflejos sin enmascarado manual.",
    },
    {
      title:    "Vestíbulo del Royal York",
      place:    "Toronto",
      category: "Interior · a mano",
      capture:  "Vídeo a mano · 1.050 fotogramas",
      train:    "11 min",
      type:     "Interior",
      body:     "Poca luz, detalle dorado y mucho tránsito. Los peatones se descartaron automáticamente, dejando una placa limpia con toda la fidelidad ornamental.",
    },
    {
      title:    "Calle del canal",
      place:    "Ámsterdam",
      category: "Escena urbana · recorrido",
      capture:  "Recorrido · 1.600 fotogramas",
      train:    "16 min",
      type:     "Escena urbana",
      body:     "400 metros de paseo junto al canal reconstruidos como una escena continua, entrenada de principio a fin en un M3 Max con 8 GB de memoria unificada.",
    },
    {
      title:    "Atrio Godiva",
      place:    "Coventry",
      category: "Atrio · serie de imágenes",
      capture:  "Serie de imágenes · 420 tomas",
      train:    "6 min",
      type:     "Atrio",
      body:     "Solo imágenes fijas, sin vídeo ni pre-paso de COLMAP. Menos de quinientas fotos para un splat navegable en menos de diez minutos.",
    },
  ],

  pt: [
    {
      title:    "Catedral de São Paulo",
      place:    "Londres",
      category: "Interior · captura 360",
      capture:  "Captura 360 · 1.240 quadros",
      train:    "12 min",
      type:     "Interior",
      body:     "Gravado em uma única passagem 360 na mão, com luz do dia e tungstênio misturados. A leitura equirretangular nativa preservou a geometria da cúpula.",
    },
    {
      title:    "Parque empresarial",
      place:    "Toronto",
      category: "Exterior · vídeo de drone",
      capture:  "Vídeo de drone · 860 quadros",
      train:    "9 min",
      type:     "Exterior",
      body:     "Duas órbitas de drone em 4K. Fachadas de vidro e caixilhos repetidos são a falha clássica do splatting; o pipeline resolveu os reflexos sem máscara manual.",
    },
    {
      title:    "Lobby do Royal York",
      place:    "Toronto",
      category: "Interior · na mão",
      capture:  "Vídeo na mão · 1.050 quadros",
      train:    "11 min",
      type:     "Interior",
      body:     "Pouca luz, detalhe dourado e muito movimento. Pedestres em trânsito foram descartados automaticamente, deixando uma imagem limpa com toda a fidelidade ornamental.",
    },
    {
      title:    "Rua do canal",
      place:    "Amsterdã",
      category: "Cena urbana · caminhada",
      capture:  "Caminhada · 1.600 quadros",
      train:    "16 min",
      type:     "Cena urbana",
      body:     "400 metros de caminhada ao longo do canal reconstruídos como uma cena contínua, treinada de ponta a ponta em um M3 Max com 8 GB de memória unificada.",
    },
    {
      title:    "Átrio Godiva",
      place:    "Coventry",
      category: "Átrio · conjunto de imagens",
      capture:  "Conjunto de imagens · 420 fotos",
      train:    "6 min",
      type:     "Átrio",
      body:     "Apenas imagens estáticas, sem vídeo e sem pré-passagem do COLMAP. Menos de quinhentas fotos para um splat navegável em menos de dez minutos.",
    },
  ],

  ru: [
    {
      title:    "Собор Святого Павла",
      place:    "Лондон",
      category: "Интерьер · съёмка 360",
      capture:  "Съёмка 360 · 1 240 кадров",
      train:    "12 мин",
      type:     "Интерьер",
      body:     "Снято одним проходом с рук в режиме 360 при смешанном дневном и накальном свете. Прямое чтение равнопромежуточной съёмки сохранило геометрию купола без перевода в перспективу.",
    },
    {
      title:    "Бизнес-парк",
      place:    "Торонто",
      category: "Экстерьер · съёмка с дрона",
      capture:  "Съёмка с дрона · 860 кадров",
      train:    "9 мин",
      type:     "Экстерьер",
      body:     "Два круга облёта в 4K. Стеклянные фасады и повторяющиеся переплёты — классическая проблема сплаттинга; конвейер разрешил отражения без ручных масок.",
    },
    {
      title:    "Лобби Royal York",
      place:    "Торонто",
      category: "Интерьер · съёмка с рук",
      capture:  "Съёмка с рук · 1 050 кадров",
      train:    "11 мин",
      type:     "Интерьер",
      body:     "Слабый свет, золочёные детали и плотный поток людей. Проходящие пешеходы были отсеяны автоматически, оставив чистый кадр с полной детализацией декора.",
    },
    {
      title:    "Улица у канала",
      place:    "Амстердам",
      category: "Городская среда · проход",
      capture:  "Проход · 1 600 кадров",
      train:    "16 мин",
      type:     "Городская среда",
      body:     "400 метров прогулки вдоль канала восстановлены как одна непрерывная сцена и обучены целиком на M3 Max в пределах 8 ГБ объединённой памяти.",
    },
    {
      title:    "Атриум Godiva",
      place:    "Ковентри",
      category: "Атриум · набор снимков",
      capture:  "Набор снимков · 420 снимков",
      train:    "6 мин",
      type:     "Атриум",
      body:     "Только фотографии — без видео и без предобработки COLMAP. Меньше пятисот снимков превращаются в проходимую сцену менее чем за десять минут.",
    },
  ],

  de: [
    {
      title:    "St Paul's Cathedral",
      place:    "London",
      category: "Innenraum · 360-Aufnahme",
      capture:  "360-Aufnahme · 1.240 Bilder",
      train:    "12 Min.",
      type:     "Innenraum",
      body:     "In einem einzigen 360-Durchgang aus der Hand bei gemischtem Tages- und Kunstlicht aufgenommen. Das direkte Einlesen der equirektangularen Aufnahme erhielt die Kuppelgeometrie vollständig.",
    },
    {
      title:    "Business Park",
      place:    "Toronto",
      category: "Außenraum · Drohnenvideo",
      capture:  "Drohnenvideo · 860 Bilder",
      train:    "9 Min.",
      type:     "Außenraum",
      body:     "Zwei Drohnenumläufe in 4K. Glasfassaden und wiederkehrende Sprossen sind der Klassiker unter den Splatting-Problemen; die Pipeline löste die Reflexionen ohne manuelle Masken.",
    },
    {
      title:    "Royal York Lobby",
      place:    "Toronto",
      category: "Innenraum · aus der Hand",
      capture:  "Handaufnahme · 1.050 Bilder",
      train:    "11 Min.",
      type:     "Innenraum",
      body:     "Wenig Licht, vergoldete Details und viel Publikumsverkehr. Passanten wurden automatisch verworfen, es blieb ein sauberes Bild in voller ornamentaler Genauigkeit.",
    },
    {
      title:    "Grachtenstraße",
      place:    "Amsterdam",
      category: "Straßenraum · Walkthrough",
      capture:  "Walkthrough · 1.600 Bilder",
      train:    "16 Min.",
      type:     "Straßenraum",
      body:     "400 Meter entlang der Gracht als eine durchgehende Szene rekonstruiert, komplett auf einem M3 Max in 8 GB Unified Memory trainiert.",
    },
    {
      title:    "Godiva-Atrium",
      place:    "Coventry",
      category: "Atrium · Bildserie",
      capture:  "Bildserie · 420 Aufnahmen",
      train:    "6 Min.",
      type:     "Atrium",
      body:     "Nur Einzelbilder, kein Video und kein COLMAP-Vorlauf. Weniger als fünfhundert Fotos zu einem begehbaren Splat in unter zehn Minuten.",
    },
  ],
};
