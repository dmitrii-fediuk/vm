// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/aveda.js
// @icon https://www.aveda.com.tr/sites/aveda/themes/aveda_base/favicon.ico
// @match *://www.aveda.com/*
// @match *://www.aveda.com.tr/*
// @name Aveda
// ==/UserScript==
// 2024-08-06 "Prevent the header from sticking on `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/12
// language=CSS
GM_addStyle('.site-header__main {position: initial !important;}');
// 2024-08-06
// 1) "Prevent the footer from sticking on `aveda.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/13
// 2) "Prevent the footer from sticking on `aveda.com`": https://github.com/dmitrii-fediuk/vm/issues/15
// language=CSS
GM_addStyle('.is-sticky {position: initial !important;}');