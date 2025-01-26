// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Trendyol/product/list/top.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/sirali-urunler?*
// @name Trendyol / Product / List / Top
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// 2025-01-26
// language=CSS
GM_addStyle([
	'#header'
	,'.category-top-ranking-image'
	,'.fvrt-btn-wrppr'
	,'.image-badge-wrapper'
	,'.social-proof-container'
	,':has(> .ctr-stmp-box-wrppr)'
	,'[data-fragment-name="Navigation"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-01-26
const productCard = [
	// language=CSS
	'#category-top-ranking > .category-top-ranking-container > .infinite-scroll'
	// language=CSS
	,'.product-listing-container > .product-card'
].join(' ');
// 2025-01-26
// language=CSS
GM_addStyle([
	'.category-top-ranking-header-wrapper'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	productCard
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	productCard
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.product-listing-container'
]
	 // language=Javascript
	.join(',') + '{min-width: initial !important; width: initial !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.pr-bx-w'
	,'.rating-container'
	,productCard
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'initial'
			,'max-height': 'initial'
			,'min-height': 'initial'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-01-26
// language=CSS
GM_addStyle([
	'.category-top-ranking-header-wrapper'
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.product-card-container'
]
	 // language=Javascript
	.join(',') + '{flex-direction: column !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.product-card-information-list'
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.product-name'
]
	 // language=Javascript
	.join(',') + '{white-space: initial !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.product-listing-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'gap': 0
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-01-26
// language=CSS
GM_addStyle([
	productCard
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			//'background': 'yellow'
			// language=Javascript
			//,'border': '1px solid red'
			'flex': '0 0 calc(50% - 0.5rem)'
			,'width': 'calc(50% - 0.5rem)'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);