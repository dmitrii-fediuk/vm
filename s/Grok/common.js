// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grok/common.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/*
// @name Grok / Common
// ==/UserScript==
// 2025-02-21 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'.\\@container\\/main div[style^="padding-bottom"]'
	,'.\\@container\\/nav .start-1'
	,':has( > h1.text-primary)'
	,'button:has(> svg.lucide-chevron-down)'
	,'form.bottom-0 :has(> textarea[aria-label="Ask Grok anything"]) > .absolute' // 2025-04-19
	,'form.bottom-0 ~ *' // 2025-03-20
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.bottom-0'
	,'.top-0'
	,':has(> div > code) > .sticky' // 2025-04-20
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.\\!font-mono'
	,'.message-bubble'
	,'.message-row'
	,'.pt-20'
	,'.query-bar'
	,':has(.message-bubble)'
	,':has(> [aria-label="Attach"])' // 2025-04-20
	,':has(> div > code) > :first-child'
	,':has(> form.bottom-0)'
	,'form.bottom-0 textarea'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	':has(> div > code)'
	,'form.bottom-0 textarea'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'[class*="backdrop-"]'
]
	 // language=Javascript
	.join(',') + '{backdrop-filter: unset !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'.\\!font-mono'
	,'[class*="bg-"]'
]
	 // language=Javascript
	.join(',') + '{background-color: white !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.bg-gradient-to-b'
]
	 // language=Javascript
	.join(',') + '{background-image: unset !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'.border-transparent' // 2025-04-20
	,'.message-bubble'
	,':has(> div > code) > :first-child'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'*'
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.shadow'
	,'[class*="shadow-"]'
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'.prose p'
	,'.prose'
	,'.text-fg-primary'
	,'.text-primary'
	,'body'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-19
// 1) `inherit` and `revert` work too.
// 2.1) https://developer.mozilla.org/en-US/docs/Web/CSS/unset
// 2.2) https://developer.mozilla.org/en-US/docs/Web/CSS/inherit
// 2.3) https://developer.mozilla.org/en-US/docs/Web/CSS/revert
// language=CSS
GM_addStyle([
	//'.\\!font-mono'
	'.prose'
	,'.text-sm'
	,':has(> code)'
	//,'code'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'code'
]
	 // language=Javascript
	.join(',') + '{font-size: 85% !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	':has(> div > code) > :first-child'
]
	 // language=Javascript
	.join(',') + '{height: auto !important;}')
;
// 2025-04-19
// 1) `inherit` and `revert` work too.
// 2.1) https://developer.mozilla.org/en-US/docs/Web/CSS/unset
// 2.2) https://developer.mozilla.org/en-US/docs/Web/CSS/inherit
// 2.3) https://developer.mozilla.org/en-US/docs/Web/CSS/revert
// language=CSS
GM_addStyle([
	'.prose'
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-04-19 https://developer.mozilla.org/en-US/docs/Web/CSS/all
// language=CSS
GM_addStyle([
	':has(> code)'
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	//':has(> code)'
	'code'
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-04-19
// language=CSS
GM_addStyle([
	'.absolute:has(> button img[alt="pfp"])'
]
	 // language=Javascript
	.join(',') + '{top: 0 !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'[class*="max-w-"]' // 2025-04-19
	,'main > *'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
	'.bottom-0'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);
// 2025-02-22
// language=CSS
//GM_addStyle('.\\@container\\/main > div {padding: 0.25rem !important;}');
// 2025-02-22
// language=CSS
//GM_addStyle('.message-bubble {padding: 0.5rem !important;}');
// 2025-02-22
// language=CSS
//GM_addStyle('.message-row {padding: 0 0.5rem !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.max-w-\\[50rem\\] {max-width: initial !important;}');
// 2025-02-22
// language=CSS
GM_addStyle(':has(> form.bottom-0) {padding-bottom: 0.25rem !important;}');
// 2025-02-22 https://chatgpt.com/c/67b8fea1-5c7c-800c-acb7-7be0480d93dd
// 2025-04-20
// language=CSS
GM_addStyle([
	'.h-full'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			// language=CSS
			//,'overflow': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle('.\\@container\\/main > .bottom-0 {width: 100% !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.\\@container\\/input {padding-bottom: 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '155%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-19
// language=CSS
GM_addStyle([
	'.\\!font-mono'
	,'code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-19
// language=CSS
GM_addStyle([
	'.\\!font-mono'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': '#067D17'
			// language=Javascript
			,'font-size': '95%'
			// language=CSS
			,'font-weight': 'bold'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-20
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-19
// language=CSS
GM_addStyle('h1 {margin: 0.5rem 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle('h2 {margin: 0.3rem 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle('h3 {margin: 0.2rem 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle('h4 {margin: 0.1rem 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle([
	'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: 0.1rem 0 !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle(':has(> div > code) > .sticky > .absolute {top: -0.4rem !important;}');
// 2025-04-20
// language=CSS
GM_addStyle('form.bottom-0 {border: 1px solid black;}');