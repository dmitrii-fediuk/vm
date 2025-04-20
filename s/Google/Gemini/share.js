// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/share/*
// @name Google / Gemini / Share
// ==/UserScript==
// 2025-04-20 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-04-20
// language=CSS
GM_addStyle([
	'.avatar-gutter'
	,'.boqOnegoogleliteOgbOneGoogleBar'
	,'.desktop-ogb-buffer'
	,'.share-viewer_chat-container ~ *'
	,'share-viewer ~ *'
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
	,'.user-query-bubble-container'
	,'.user-query-bubble-with-background'
	,'user-query'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
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
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-20
// language=CSS
GM_addStyle([
	'user-query'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'background-color': '#f2f2f2'
			// language=Javascript
			,'margin': '0.5rem 0'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);