// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/share/*
// @name Google / Gemini / Share
// ==/UserScript==
// 2025-04-20 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-08-05
// language=CSS
GM_addStyle([
	'.gds-title-s' // 2025-08-05
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.avatar-gutter'
	,'.boqOnegoogleliteOgbOneGoogleBar'
	,'.desktop-ogb-buffer'
	,'.share-viewer_chat-container ~ *'
	,'button[mattooltip="Report"]' // 2025-04-21
	,'share-viewer ~ *'
	,'top-bar-actions' // 2025-04-21
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.query-content'
	,'.user-query-bubble-container'
	,'.user-query-bubble-with-background > .horizontal-container'
	,'user-query-content'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.query-content'
	,'.top-container'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.query-content'
	,'.response-container'
	,'.user-query-bubble-container'
	,'.user-query-bubble-with-background'
	,'user-query'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-28
// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
// 2) Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
// language=CSS
GM_addStyle([
	'#chat-history'
	,'.content-container'
	,'.content-wrapper'
	,'.main-content'
	,'bard-sidenav-container'
	,'bard-sidenav-content'
	,'body'
	,'chat-app'
	,'html'
	,'main'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'block'
			,'height': 'auto'
			,'overflow': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-20
// language=CSS
GM_addStyle([
	'.chat-history'
	,'.top-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-04-20
// language=CSS
GM_addStyle([
	'user-query'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'margin': '0.5rem 0'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);