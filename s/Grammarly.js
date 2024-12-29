// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grammarly.js
// @icon https://denali-static.grammarly.com/files/f1d4cabc38892f860a29/apple-touch-icon-v2.png
// @match *://*.grammarly.com/*
// @name Grammarly
// ==/UserScript==
// 2024-12-30 "Improve Grammarly": https://github.com/dmitrii-fediuk/vm/issues/81
// language=CSS
GM_addStyle([
	'.gds-popover'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2024-12-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-30
if (location.hostname.startsWith(('account.'))) {
	// 2024-12-30
	if (location.pathname.startsWith('/customize/')) {
		// 2024-12-30
		// language=CSS
		GM_addStyle([
			'main > [class*="description"]'
			,'main > [class*="spacer"]'
			,'main > h1'
		]
			 // language=Javascript
			.join(',') + '{display: none !important;}')
		;
	}
}
// 2024-12-30
else if (location.hostname.startsWith(('app.'))) {

}