// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/trendyol.com.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/*
// @name Trendyol
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// language=CSS
GM_addStyle([
	'#collection-recommendation'
	,'#headerMain > .wrapper'
	,'#logo'
	,'.cobranded-card-offer-information'
	,'.container-banners'
	,'.installment-banner-image'
	,'.related-categories'
	,'.search-landings-container'
	,'.search-store-ads-container'
	,'.srch-rslt-title ~ div:has(> .quick-filters > .carousel)'
	,'.sticky-header'
	,'[data-fragment-name="TopBanner"]'
	,'footer'
	// 2024-11-03 https://chatgpt.com/c/6715bd95-bee4-8006-bf0f-5174d0c9dfba
	,'ul.navigation-all-categories-enabled > li:has(> a[href="/flas-indirimler"])'
	,'ul.navigation-all-categories-enabled > li:has(> a[href^="/cok-satanlar?"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.status-quick-filters-wrapper .scrolled'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-01-01
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
			//,'font-size': '140%'
			//,'line-height': 1.2
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-01-01
// language=CSS
GM_addStyle('body {padding-left: 1rem !important;}');
// 2024-12-31 https://chatgpt.com/c/67735822-2ec8-800c-a18d-d3c5383c1c74
if ('product' === document.querySelector('meta[name="twitter:card"]')?.content) {
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'#combinations-recommendation'
		,'#header'
		,'.ProductDetail-First-Slider' // 2024-12-31 «Sana Özel Giyim Ürünleri» / «Clothing Products Special For You»
		,'.add-to-collections-wrapper'
		,'.campaigns-widget .widget-row:has([title*="Kargo Bedava"])'
		,'.detail-attributes-title'
		// 2025-01-01
		// I hide all items, and then I will show back items after `li.return-info`.
		// https://chatgpt.com/c/677375b3-335c-800c-8985-a81446d9a8b5
		,'.detail-desc-list > li'
		,'.detail-desc-list > li::before'
		,'.detail-name-container'
		,'.detail-section-img'
		,'.details-section > .title'
		,'.favorite-button'
		,'.featured-information'
		,'.gallery-icon-container'
		,'.markerInfo'
		,'.markerOverlay'
		,'.omc-cntr .pr-mb-pr:has(.corporate-invoice)'
		,'.omc-cntr .pr-mb-pr:has(.crg)'
		,'.other-merchants-list-item .promotions .invoice-corporate-stamp'
		,'.payment-options-wrapper'
		,'.product-review-widget'
		,'.product-stamps-container'
		,'.report-abuse-container'
		,'.report-container'
		,'[data-fragment-name="MarketingProductDetail"]'
		,'[data-fragment-name="Navigation"]'
		,'[data-partial-fragment-name="MarketingProductDetail"][data-partial-fragment-part="breadcrumb-without-gender"]'
		,'[data-partial-fragment-name="MarketingProductDetail"][data-partial-fragment-part="seo-content"]'
		,'article.questions-wrapper'
		,'article[data-drroot="product-reviews"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
	]
		 // language=Javascript
		.join(',') + '{display: initial !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.omc-cntr > *' // 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block's items
		,'.pr-in-ratings'
		,'.pr-in-w'
		,'.pr-omc' // 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block
		,'.product-container'
		,'.product-detail-breadcrumb'
		,'.product-detail-container'
		,'.product-detail-wrapper'
		,'.size-variant-wrapper [data-testid="sliderList"] .sp-itm'
		,'.social-proof-wrapper'
		,'.stock-warning-badge'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.gallery-container'
		,'.omc-cntr > *' // 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block's items
		,'.product-container'
		,'.product-detail-container'
		,'.product-detail-wrapper'
		,'.product-widget-list'
		,'.socialProofWrapper'
	]
		 // language=Javascript
		.join(',') + '{min-width: initial !important; width: initial !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.base-product-image'
		,'.omc-cntr > *' // 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block's items
		,'.product-image-container'
		,'.social-proof-wrapper'
		,'.socialProofWrapper'
	]
		 // language=Javascript
		.join(',') + '{height: initial !important; min-height: initial !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.product-container > *'
	]
		 // language=Javascript
		.join(',') + '{justify-content: initial !important;')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.detail-border'
		,'.pr-in-w'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2025-01-01
	// language=CSS
	GM_addStyle([
		'.base-product-image img'
		,'.detail-border'
	]
		 // language=Javascript
		.join(',') + '{border: 0 !important;}')
	;
	// 2025-01-01
	// language=CSS
	GM_addStyle('.pr-in-cn {gap: 0.2rem !important;}');
	// 2025-01-01 https://chatgpt.com/c/67747760-5eb0-800c-a45f-2d60ce9a8cc8
	// language=CSS
	GM_addStyle([
		'.pr-in-cn .product-info-badges'
		,'.pr-in-cn .product-price-container'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'inline-block'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-01-01
	// language=CSS
	GM_addStyle([
		'.detail-desc-list'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'column-count': 'initial'
				,'list-style-type': 'decimal'
				// language=Javascript
				,'padding-left': '2rem'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2025-01-01
	// language=CSS
	GM_addStyle('.detail-desc-list > li {font-size: 1.5rem !important; margin: 0.3rem 0 !important;}');
	// 2025-01-01
	// language=CSS
	GM_addStyle('.detail-desc-list > li::marker {font-weight: bold !important;}');
	// 2025-01-01
	// I hid all items above, and now I show back items after `li.return-info`.
	// https://chatgpt.com/c/677375b3-335c-800c-8985-a81446d9a8b5
	// language=CSS
	GM_addStyle('.detail-desc-list > li.return-info ~ li {display: list-item !important;}');
	// 2024-12-31 https://chatgpt.com/c/67735dbf-bda8-800c-a506-c35441efaa30
	// language=CSS
	GM_addStyle('.size-variant-wrapper [data-testid="sliderList"] {' +
		'display: grid !important; gap: 0.3rem; grid-template-columns: repeat(5, 1fr);' +
	'}');
	// language=CSS
	GM_addStyle('.size-variant-wrapper [data-testid="sliderList"] .sp-itm {' +
		'padding: 0 0.2rem !important;' +
	'}');
	// 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block's items
	// language=CSS
	GM_addStyle('.omc-cntr {' +
		'display: grid !important; gap: 0.3rem; grid-template-columns: repeat(3, 1fr);' +
	'}');
	// 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block's items
	// language=CSS
	GM_addStyle('.omc-cntr > * {padding: 0.3rem !important;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('.product-detail-container .title {margin: 0 0 0.3rem 0 !important;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('div:has(> .gallery-container) {width: 20rem !important;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('.product-detail-container {display: flex !important; flex-direction: column;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('.product-detail-container > :has(.product-container) {order: 0;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('.product-detail-container > [data-drroot="similar-products"] {order: 3;}');
	// 2024-12-31
	// language=CSS
	GM_addStyle('.product-detail-container > [data-drroot="cross-recommendations"] {order: 4;}');
}
// 2024-12-31
else if (location.pathname.startsWith(('/hesabim/siparislerim'))) {
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.account-layout-container > .left'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle('.account-layout-container > .right {float: none !important;}');
}