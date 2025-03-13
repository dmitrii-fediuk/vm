// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/MediaWiki/custom.js
// @icon https://www.mediawiki.org/static/apple-touch/mediawiki.png
// @match *://*/*
// @name MediaWiki / Custom
// ==/UserScript==
// 2025-03-13 "Improve MediaWiki-based websites": https://github.com/dmitrii-fediuk/vm/issues/96
if (
	!document.querySelector('meta[name="generator"]')?.content?.startsWith('MediaWiki')
	|| ['wikipedia.org', 'wikimedia.org'].some(v => location.hostname.endsWith(v))
) {
	return;
}
// language=CSS
GM_addStyle([
	'#mw-head-base'
	,'#mw-page-base'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-13
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-13
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
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);