// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/learn.microsoft.com.js
// @icon https://www.microsoft.com/favicon.ico?v2
// @match *://learn.microsoft.com/*
// @name learn.microsoft.com
// ==/UserScript==
// 2024-08-18 "Improve articles appearance on `learn.microsoft.com`": https://github.com/dmitrii-fediuk/vm/issues/23
// language=CSS
GM_addStyle('#article-header, .header-holder, #site-user-feedback-footer, section:has(> footer), #user-feedback {' +
	'display: none !important;' +
'}');
// language=CSS
GM_addStyle('.columns.has-large-gaps {margin: 0 !important;}');
// language=CSS
GM_addStyle('.mainContainer {max-width: initial !important; width: initial !important;}');
// 2024-08-18 "Hide the left sidebar from `learn.microsoft.com`: https://github.com/dmitrii-fediuk/adblock/issues/83
// language=CSS
GM_addStyle('#left-container {display: none !important;}');
// 2023-10-19, 2024-08-18
// "Hide the «Additional resources» column from learn.microsoft.com": https://github.com/dmitrii-fediuk/adblock/issues/83
// language=CSS
GM_addStyle('#ms--additional-resources {display: none !important;}');
// 2024-08-18
// 1) "Improve articles appearance on `learn.microsoft.com`": https://github.com/dmitrii-fediuk/vm/issues/23
// 2) "Hide the left sidebar from `learn.microsoft.com`: https://github.com/dmitrii-fediuk/adblock/issues/83
// 3) "Hide the «Additional resources» column from learn.microsoft.com": https://github.com/dmitrii-fediuk/adblock/issues/8
// language=CSS
GM_addStyle('section.primary-holder {padding: 0 !important; width: initial !important;}');