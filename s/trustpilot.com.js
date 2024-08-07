// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/trustpilot.com.js
// @icon https://cdn.trustpilot.net/brand-assets/4.3.0/favicons/apple-touch-icon.png
// @match *://*.trustpilot.com/*
// @name trustpilot.com
// ==/UserScript==
// 2024-08-07 "Prevent the header from sticking on `trustpilot.com`": https://github.com/dmitrii-fediuk/vm/issues/20
// language=CSS
GM_addStyle('[class*="styles_wrapSticky"], [class*="styles_isFixed"] {position: initial !important;}');
// 2024-08-07 "Hide the right sidebar from `trustpilot.com`": https://github.com/dmitrii-fediuk/vm/issues/21
// language=CSS
GM_addStyle('[class^="styles_mainContent"] > aside {display: none !important;}');