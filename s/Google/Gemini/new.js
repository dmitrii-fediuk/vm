// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/new.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app
// @match *://gemini.google.com/u/*/app
// @name Google / Gemini / New
// 2025-08-03
// 1) https://g.co/gemini/share/a3117147d580
// 2) https://g.co/gemini/share/aeadd7b5e03f
// @run-at document-start
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-28
// 2025-08-02
// language=CSS
GM_addStyle([
	'auto-suggest' // 2025-08-15
	,'chat-app-banners' // 2025-08-30
	,'.announcement-banner-container' // 2025-08-30
	,'.contextual-actions-container' // 2025-08-15
	// 2025-08-02
	// Hiding `chat-window-content` is a mistake
	// because it prevents us from knowing when Gemini has finished thinking.
	,'.zero-state-container' // 2025-08-02
]
	 // language=Javascript
	.join(',') + '{display: none !important;}'
);
// 2025-08-02
// language=CSS
GM_addStyle([
	//'chat-window-content' // 2025-08-02
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}'
);
// 2025-08-02
// language=CSS
GM_addStyle([
	'.input-area-container' // 2025-08-02
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}'
);