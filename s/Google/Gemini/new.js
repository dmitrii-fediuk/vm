// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/new.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app
// @match *://gemini.google.com/u/*/app
// @name Google / Gemini / New
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-08-02
setTimeout(() => {
	// 2025-03-28
	// language=CSS
	GM_addStyle([
		//'chat-window-content' // 2025-08-02
		'.aurora-greeting-container' // 2025-08-02
		,'.parent-condensed-prompt-card-container' // 2025-08-02
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}'
	);
}, 1000);
// 2025-08-02
// language=CSS
GM_addStyle([
	'.input-area-container' // 2025-08-02
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}'
);