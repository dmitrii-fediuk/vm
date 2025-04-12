// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Claude/new.js
// @icon https://claude.ai/images/claude_app_icon.png
// @match *://claude.ai/new
// @name Claude / New
// ==/UserScript==
// 2024-11-30 "Improve `claude.ai`": https://github.com/dmitrii-fediuk/vm/issues/68
// 2025-03-20
// language=CSS
GM_addStyle([
	':has(> [data-state="closed"] > a[aria-label="New chat"])'
	,'main > .mx-auto > .font-copernicus:has(.text-accent-brand)' // 2025-03-20 «Good morning»
	// 2025-04-12 «Good morning»
	,'main > .mx-auto > .font-copernicus:has(svg > path[d^="M96.0000 40.0000 L99.5002"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'main'
	,'main > *'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;

// language=CSS
GM_addStyle([
	'main > .max-w-2xl'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
