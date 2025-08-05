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