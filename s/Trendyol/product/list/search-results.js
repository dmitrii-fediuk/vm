// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Trendyol/product/list/search-results.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/sr/*
// @name Trendyol / Product / List / Search Results
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// 2025-01-26
// language=CSS
GM_addStyle([
	'.fvrt-btn-wrppr'
	,'.image-overlay'
	,'.price-promotion-container > :not(.prc-cntnr)'
	,'.prvs-pg-bttn-wrppr'
	,'.quick-look-container'
	,'.rating-wrapper'
	,'.social-proof-wrapper'
	,'.variant-options-wrapper'
	,':has(> .product-card-images-indicator)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.p-card-wrppr'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.p-card-img'
	,'.p-card-wrppr' // 2025-01-26 https://chatgpt.com/c/67959338-9f94-800c-a07a-1d6ae0a28ec8
	,'.search-app-container'
	,'.srch-prdcts-cntnr'
	,'.srch-rslt-cntnt' // 2025-01-26 https://chatgpt.com/c/67959338-9f94-800c-a07a-1d6ae0a28ec8
]
	 // language=Javascript
	.join(',') + '{width: auto !important;}')
;
// 2025-01-26
// language=CSS
GM_addStyle([
	'.image-container'
	,'.price-promotion-container'
	,'.product-down'
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
	'.card-border'
	,'.p-card-img-wr'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-01-26 https://chatgpt.com/c/67959338-9f94-800c-a07a-1d6ae0a28ec8
// language=CSS
GM_addStyle([
	'.product-desc-sub-text'
]
	 // language=Javascript
	.join(',') + '{white-space: initial !important;}')
;
// 2025-01-26 https://chatgpt.com/c/67959338-9f94-800c-a07a-1d6ae0a28ec8
// language=CSS
GM_addStyle([
	'.p-card-wrppr'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			//'background': 'yellow'
			// language=Javascript
			//,'border': '1px solid red'
			'flex': '0 0 calc(20% - 0.5rem)'
			,'width': 'calc(20% - 0.5rem)'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-01-26
// language=CSS
GM_addStyle([
	'.p-card-img'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'height': '184px'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
//GM_addStyle('.p-card-wrppr > * {display: none !important;}');
// 2025-01-26 https://chatgpt.com/c/679588e5-6c4c-800c-93b6-d95e92876f7b
if ((new URL(location.href)).searchParams.has('pi')) {
	// language=CSS
	GM_addStyle([
		'#header'
		,'#sticky-aggregations'
		,'.srch-prdcts-cntnr > :not(.infinite-scroll)'
		,'[data-fragment-name="Navigation"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}