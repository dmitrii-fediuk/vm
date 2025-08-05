// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat-share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app/*
// @match *://gemini.google.com/share/*
// @match *://gemini.google.com/u/*/app/*
// @name Google / Gemini / Chat & Share
// ==/UserScript==
// 2025-08-05 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-08-05
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'font-size': '120%' // 2025-03-29
			,'margin': '0 0 0 1rem' // 2025-03-28
			// language=CSS
			,'width': 'auto' // 2025-03-28
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'.current-mode-title'
	,'.gds-title-s'
	,'.markdown'
	,'.mat-mdc-button'
	,'.query-text'
	,'body'
	,'code'
	,'code-block'
	,'pre'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': 'black'
			,'font-family': 'Segoie UI'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': '#067D17'
			,'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '1rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29 https://chatgpt.com/c/67e7837a-75b4-8003-af6a-1d8a350d139c
// language=CSS
GM_addStyle([
	'code', 'pre'
]
	 // language=Javascript
	.join(',') + '{tab-size: 4 !important;}')
;
// language=CSS
GM_addStyle([
	'code:not(.code-container)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'background-color': 'initial' // 2025-03-29
			// language=CSS
			,'font-weight': 'bold' // 2025-03-28
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'.code-block > *'
	,'code.code-container'
	,'code-block'
]
	 // language=Javascript
	.join(',') + '{background-color: rgb(249, 249, 249) !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.query-text'
]
	 // language=Javascript
	.join(',') + '{font-size: 100% !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.markdown'
	,'.ql-editor'
]
	 // language=Javascript
	.join(',') + '{font-size: 110% !important;}')
;
// 2025-04-20, 2025-08-05
// language=CSS
GM_addStyle([
	'user-query'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'background-color': '#f2f2f2'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-28
// language=CSS
GM_addStyle([
	'.markdown :is(ol, p, ul)'
	,'p.query-text-line:not(:has(> br))'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.markdown li'
]
	 // language=Javascript
	.join(',') + '{margin: 0.15rem 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle('.user-query-bubble-with-background {background-color: rgba(232, 232, 232, 0.5) !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('.query-text {line-height: 1.2 !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('.markdown {line-height: 1.4 !important;}');
// 2025-03-28
// language=CSS
GM_addStyle('p.query-text-line br {display: block !important; content: ""; height: 1px !important;}');
// 2025-03-28
// language=CSS
GM_addStyle([
	'.query-text.collapsed'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'-webkit-line-clamp': 'none'
			,'display': 'block'
			,'line-clamp': 'none'
			,'overflow': 'initial'
			,'text-overflow': 'initial'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);