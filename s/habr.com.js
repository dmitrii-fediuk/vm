// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/habr.com.js
// @icon https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-256.png
// @match *://habr.com/*
// @name habr.com
// ==/UserScript==
// 2024-12-21 "Improve `habr.com`": https://github.com/dmitrii-fediuk/vm/issues/78
// language=CSS
GM_addStyle([
	'.banner'
	,'.tm-article-blocks__comments ~ div:has(.tm-promo-block__content-wrapper)'
	,'.tm-article-poll-container'
	,'.tm-article-presenter__meta'
	,'.tm-article-sticky-panel'
	,'.tm-comment-navigation'
	,'.tm-comment-thread__button'
	,'.tm-comments-wrapper__header-aside'
	,'.tm-feature'
	,'.tm-footer'
	,'.tm-header__logo-wrap'
	,'.tm-notice_negative.tm-comments__comment-notice'
	,'.tm-project-block'
	,'[data-test-id="search-button"]'
	,'[data-test-id="tracker-link"]'
	//,'button.tm-comment-navigation__button_refresh'
	,'div:has(> .tm-project-block_variant-salary)'
	,'header.tm-header'
	,'section.tm-block:has(.tm-article-author)'
	,'section.tm-block:has(.tm-tabs)'
	,'section.tm-events-block'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle('.tm-article-blocks__comments {margin: 0 !important;}');
// language=CSS
GM_addStyle('.tm-article-presenter__body {margin: 0 !important;}');
// language=CSS
GM_addStyle('.tm-page {padding: 0 !important;}');