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
		,'.favorite-button'
		,'.featured-information .content-descriptions'
		,'.featured-information-header'
		,'.gallery-icon-container'
		,'.markerInfo'
		,'.markerOverlay'
		,'.payment-options-wrapper'
		,'.product-review-widget'
		,'.product-stamps-container'
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
		'.gallery-container'
		,'.product-container'
		,'.product-detail-container'
		,'.product-detail-wrapper'
		,'.product-widget-list'
	]
		 // language=Javascript
		.join(',') + '{min-width: initial !important; width: initial !important;}')
	;
	// 2024-12-31
	// language=CSS
	GM_addStyle([
		'.base-product-image'
		,'.product-image-container'
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
		'.pr-omc' // 2024-12-31 The «Ürünün Diğer Satıcıları» / «Other Sellers of the Product» block
		,'.product-container'
		,'.product-detail-breadcrumb'
		,'.product-detail-container'
		,'.size-variant-wrapper [data-testid="sliderList"] .sp-itm'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-31 https://chatgpt.com/c/67735dbf-bda8-800c-a506-c35441efaa30
	// language=CSS
	GM_addStyle('.size-variant-wrapper [data-testid="sliderList"] {' +
		'display: grid !important; gap: 0.3rem; grid-template-columns: repeat(5, 1fr);' +
	'}');
	// language=CSS
	GM_addStyle('.size-variant-wrapper [data-testid="sliderList"] .sp-itm {' +
		'padding: 0 0.2rem !important;' +
	'}');
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