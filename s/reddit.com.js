// 2024-05-17
// 1) https://violentmonkey.github.io/api/metadata-block
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#repos-sticky-header
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// 2024-05-20
// 1) https://violentmonkey.github.io/api/metadata-block#grant
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#grant
// @grant GM_addStyle
// 2024-05-17
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/reddit.com.js
// 2024-05-17
// 1) https://violentmonkey.github.io/api/metadata-block#icon
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#icon
// @icon https://www.redditstatic.com/shreddit/assets/favicon/192x192.png
// 2024-05-17
// 1.1) https://violentmonkey.github.io/api/metadata-block#match--exclude-match
// 1.2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#match--exclude-match
// 2.1) https://violentmonkey.github.io/api/matching
// 2.2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/matching.md#repos-sticky-header
// 3) https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns#gc-wrapper
// @match *://*.reddit.com/*
// 2024-05-17
// 1) https://violentmonkey.github.io/api/metadata-block#name
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#name
// @name reddit.com
// ==/UserScript==
// 2024-05-20
// 1.1) https://violentmonkey.github.io/api/gm#gm_addstyle
// 1.2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/gm.md#gm_addstyle
// 2) https://www.jetbrains.com/help/idea/using-language-injections.html#use-language-injection-comments
// language=CSS
GM_addStyle('main {max-width: 100% !important;}');
// 2024-06-24
// "Hide the search form from Reddit": https://github.com/dmitrii-fediuk/vm/issues/7
GM_addStyle('div.justify-stretch:has(> div > div > search-dynamic-id-cache-controller]) {display: none;}');