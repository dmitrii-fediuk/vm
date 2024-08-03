// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/support.weltpixel.com.js
// @icon https://support.weltpixel.com/hc/theming_assets/01HZKV0BX7QSNW2YGJKXDJ8MTB
// @match *://support.weltpixel.com/*
// @name support.weltpixel.com
// ==/UserScript==
// 2024-08-03 "Hide the left sidebar from `support.weltpixel.com`": https://github.com/dmitrii-fediuk/adblock/issues/77
// language=CSS
GM_addStyle('.article {max-width: 100% !important;}');
// 2024-08-03 "Hide the top advertisements from `support.weltpixel.com`": https://github.com/dmitrii-fediuk/vm/issues/11
// language=CSS
GM_addStyle('.hc_header > a {display: none !important;}');