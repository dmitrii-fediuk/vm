// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/JetBrains/YouTrack.js
// @icon https://www.jetbrains.com/apple-touch-icon.png
// @match *://youtrack.jetbrains.com/*
// @name JetBrains / YouTrack
// ==/UserScript==
// 2025-03-25 "Improve `jetbrains.com`": https://github.com/dmitrii-fediuk/vm/issues/84
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'[class*="ticketHeaderSticky"]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([

]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
		// language=CSS
		Object.entries({
			// language=Javascript
			'max-width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);