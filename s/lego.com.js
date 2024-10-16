// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/lego.com.js
// @icon https://www.lego.com/lego-logo-512.png
// @match *://www.lego.com/*
// @name lego.com
// ==/UserScript==
// 2024-10-19 "Improve `lego.com`": https://github.com/dmitrii-fediuk/vm/issues/56
// language=CSS
GM_addStyle('header {min-height: initial !important;}');
// language=CSS
GM_addStyle([
	'[class^=DynamicContentPagestyles] > [data-contenttype=TextBlock]'
	,'[class^=ProductFeaturesstyles__Cta]'
	,'[class^=ProductRecommendationsstyles]'
	,'[class^=ShopMoreLikeThisstyles]'
	,'[class^=UtilityBarstyles]'
	,'[data-contenttype=CustomProductCarouselSection]'
	,'[data-contenttype=QuickLinkSection]'
	,'[data-contenttype=RelatedArticleSection]'
	,'[data-contenttype=section]'
	,'[data-test=article-text]'
	,'[data-test=fixed-pos-wrapper]'
	,'[data-test=global-banner]'
	,'[data-test=header-kids-link]'
	,'[data-test=lego-logo]'
	,'[data-test=pdp-gwp-accordion]'
	,'[data-test=pdp-promo-section]'
	,'[data-test=vip-link]'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'[data-test=header-wrapper]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle('section[class^=LayoutSectionstyles] {margin: 0 !important; padding: 0 0.5rem !important;}');
// language=CSS
GM_addStyle('[data-test=listing-summary] {padding: 0 0 0.5rem 0 !important;}');
// language=CSS
GM_addStyle('[data-test=add-to-bag-sticky-container] {position: relative !important;}');
// language=CSS
GM_addStyle('[class^=TextBlock_innerWrapper] {max-width: initial !important; padding: 0 1em !important;}');
// language=CSS
GM_addStyle([
	'[class^=TextBlock_innerWrapper] > *'
	,'#pdp-specifications-accordion-content'
]
	 // language=Javascript
	.join(',') + '{font-size: 1.5rem !important;}')
;
// language=CSS
GM_addStyle('[class^=ProductFeaturesstyles__Body] {display: initial !important;}');
// language=CSS
GM_addStyle('[class^=ProductFeaturesstyles__Copy] {width: 100% !important; padding: 0 !important;}');