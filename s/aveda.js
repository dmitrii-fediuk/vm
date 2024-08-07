// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/aveda.js
// @icon https://www.aveda.com.tr/sites/aveda/themes/aveda_base/favicon.ico
// @match *://www.aveda.com/*
// @match *://www.aveda.com.tr/*
// @name Aveda
// ==/UserScript==
// 2024-08-06
// 1) "Prevent the footer from sticking on `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/13
// 2) "Prevent the footer from sticking on `aveda.com`": https://github.com/dmitrii-fediuk/vm/issues/15
// language=CSS
GM_addStyle('.is-sticky {position: initial !important;}');
// 2024-08-06
// 1) "Prevent the header from sticking on `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/12
// 2) "Prevent the header from sticking on `aveda.com`": https://github.com/dmitrii-fediuk/vm/issues/14
// language=CSS
GM_addStyle('.site-header__main {position: initial !important;}');
// 2024-08-06 "Hide the header from product pages on `aveda.com` / `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/16
// language=CSS
GM_addStyle('body.page-product > header {display: none !important;}');
// language=CSS
GM_addStyle('.product-full {padding-top: 0 !important;}');
// language=CSS
GM_addStyle('.product-full__image-wrapper, .product-full__breadcrumb {margin-top: 0 !important;}');
// 2024-06-06
// "Improve the product pages appearance on `aveda.com` / `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/19
// language=CSS
GM_addStyle('.product-full__details {margin-top: 0 !important; padding-top: 0 !important;}');
// language=CSS
GM_addStyle('.product-full__misc-flag {min-height: 0 !important;}');
// 2024-08-06
// "Prevent the «ADD TO BAG» button from sticking on `aveda.com": https://github.com/dmitrii-fediuk/vm/issues/17
// language=CSS
GM_addStyle('.product-full .product-full__bottom-sticky-bar {position: initial !important;}');