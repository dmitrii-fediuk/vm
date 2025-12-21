// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat-share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/app/*
// @match *://gemini.google.com/share/*
// @match *://gemini.google.com/u/*/app/*
// @match *://gemini.google.com/u/*/share/*
// @name Google / Gemini / Chat & Share
// ==/UserScript==
// 2025-08-05 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-11-04
// language=CSS
GM_addStyle([
	'td:not(#A)'// 2025-11-04
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-12-21
// language=CSS
GM_addStyle([
	'.footer' // 2025-12-21
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-12-21
// language=CSS
GM_addStyle([
	'.container' // 2025-12-21
	,'structured-content-container' // 2025-12-21
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-12-21
// language=CSS
GM_addStyle([
	'structured-content-container' // 2025-12-21
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-12-21 Partial share
if (1) {
	// 2025-08-05
	// language=CSS
	GM_addStyle([
		'body'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				// language=CSS
				//'display': 'block' // 2025-08-05
				// language=Javascript
				'font-size': '120%' // 2025-03-29
				,'margin': '0 .5rem' // 2025-03-28
				// language=CSS
				,'overflow-x': 'hidden' // 2025-08-05
				// language=CSS
				,'width': 'auto' // 2025-03-28
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-03-28
	// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
	// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
	// 2) Similar to:
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
	// language=CSS
	GM_addStyle([
		'#chat-history' // 2025-04-20
		,'.chat-container' // 2025-08-05
		,'.content-container' // 2025-08-05
		,'.content-wrapper' // 2025-08-05
		//,'.main-content' // 2025-08-05
		,'bard-sidenav-container' // 2025-03-28
		//,'bard-sidenav-content' // 2025-08-05
		,'chat-app' // 2025-03-28
		//,'html' // 2025-03-28
		//,'main' // 2025-03-28
		,'chat-window' // 2025-08-05
		,'infinite-scroller' // 2025-04-20
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'block'
				,'height': 'auto'
				,'overflow': 'unset'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
}
// 2025-12-21 Full share
if (0) {
	// 2025-08-05
	// language=CSS
	GM_addStyle([
		'body'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				// language=CSS
				'display': 'block' // 2025-08-05
				// language=Javascript
				,'font-size': '120%' // 2025-03-29
				,'margin': '0 0 0 1rem' // 2025-03-28
				// language=CSS
				,'overflow-x': 'hidden' // 2025-08-05
				// language=CSS
				,'width': 'auto' // 2025-03-28
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-03-28
	// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
	// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
	// 2) Similar to:
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
	// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
	// language=CSS
	GM_addStyle([
		'#chat-history' // 2025-04-20
		,'.chat-container' // 2025-08-05
		,'.content-container' // 2025-08-05
		,'.content-wrapper' // 2025-08-05
		,'.main-content' // 2025-08-05
		,'bard-sidenav-container' // 2025-03-28
		,'bard-sidenav-content' // 2025-08-05
		,'chat-app' // 2025-03-28
		,'html' // 2025-03-28
		,'main' // 2025-03-28
		,'chat-window' // 2025-08-05
		,'infinite-scroller' // 2025-04-20
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'block'
				,'height': 'auto'
				,'overflow': 'unset'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
}


// 2025-03-29
// language=CSS
GM_addStyle([
	'.current-mode-title:not(#A)'
	,'.gds-title-s:not(#A)'
	,'.markdown:not(#A)'
	,'.markdown:not(#A) :not(code, mat-icon)' // 2025-11-04
	,'.mat-mdc-button:not(#A)'
	,'.query-text:not(#A)'
	,'body:not(#A)'
	,'code-block:not(#A)'
	,'pre:not(#A)'
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
	'code:not(#A)'
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
	'.markdown:not(#A)'
	,'.ql-editor:not(#A)'
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
GM_addStyle('.query-text:not(#A) {line-height: 1.2 !important;}');
// 2025-03-28, 2025-11-04
// language=CSS
GM_addStyle('.markdown:not(#A) {line-height: 1.4 !important;}');
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
// 2025-11-04
// language=CSS
GM_addStyle('h1 {font-size: 2rem !important; margin: 0 !important;}');
// 2025-11-04
// language=CSS
GM_addStyle('h2 {font-size: 1.75rem !important; margin: .6rem 0 .3rem 0 !important;}');
// 2025-11-04
// language=CSS
GM_addStyle('h3 {font-size: 1.5rem !important; margin: .5rem 0 .2rem 0 !important;}');
// 2025-11-04
// language=CSS
GM_addStyle('h4 {font-size: 1.25rem !important; margin: .4rem 0 .15rem 0 !important;}');
