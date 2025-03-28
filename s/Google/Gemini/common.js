// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/common.js
// @icon https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png
// @match *://gemini.google.com/*
// @name Google / Gemini
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// language=CSS
GM_addStyle([
	// 2024-11-03 https://chatgpt.com/c/6715bd95-bee4-8006-bf0f-5174d0c9dfba
	'bot-list-item:has(mat-icon[data-mat-icon-name="emoji_objects"])' // 2024-10-23 "Brainstormer"
	,'bot-list-item:has(mat-icon[data-mat-icon-name="work"])' // 2024-10-23 "Career guide"
	,'.capabilities-disclaimer'
	,'location-footer'
	,'zero-state-v2'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	'body' // 2025-03-27 https://chatgpt.com/c/67e49f23-bf58-8003-bc79-a7c015fa11cf
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-03-27
// 1) https://chatgpt.com/c/67e49f23-bf58-8003-bc79-a7c015fa11cf
// 2) Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
// language=CSS
GM_addStyle([
	//'body', 'html'
]
	 // language=Javascript
	.join(',') + '{height: auto !important; overflow-y: initial !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	'body', 'html'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			,'overflow': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
