// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Hetzner/robot.js
// @icon https://docs.hetzner.com/favicon-32x32.png
// @match *://robot.hetzner.com/*
// @name Hetzner / Robot
// ==/UserScript==
// 2025-02-08 "Improve `robot.hetzner.com`": https://github.com/dmitrii-fediuk/vm/issues/90
// language=CSS
GM_addStyle([
	'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
	'nav'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);