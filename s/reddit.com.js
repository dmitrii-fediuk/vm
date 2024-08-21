// 2024-05-17
// 1) https://violentmonkey.github.io/api/metadata-block
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#repos-sticky-header
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// 2024-05-20
// 1) https://violentmonkey.github.io/api/metadata-block#grant
// 2) https://github.com/violentmonkey/violentmonkey.github.io/blob/587d6569/content/api/metadata-block.md#grant
// @grant GM_addElement
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
// 1) "Hide the search form from Reddit": https://github.com/dmitrii-fediuk/vm/issues/7
// 2) https://caniuse.com/css-has
// language=CSS
GM_addStyle('div.justify-stretch:has(> div > div > search-dynamic-id-cache-controller) {display: none !important;}');
// 2024-08-19 "Unstick everything on Reddit": https://github.com/dmitrii-fediuk/vm/issues/25
// language=CSS
GM_addStyle('.fixed {position: initial !important;}');
// 2024-08-21 "Improve the appearance of Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/37
// language=CSS
GM_addStyle('shreddit-app {padding: 0 !important;}');
// language=CSS
GM_addStyle('shreddit-status-icons {display: none !important;}');
// language=CSS
GM_addStyle('#next-comment {display: none !important;}');
// language=CSS
GM_addStyle('shreddit-post {margin: 0 !important; padding: 0 !important;}');
// 2024-05-17, 2024-08-21 "Hide the logo from Reddit": https://github.com/dmitrii-fediuk/vm/issues/38
// language=CSS
GM_addStyle('faceplate-tracker[noun="reddit_logo"] {display: none !important;}');
// 2024-08-21 "Hide the page's header from Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/39
// language=CSS
GM_addStyle('shreddit-app[routename="post_page"] reddit-header-large {display: none !important;}');
// 2024-08-21 "Hide the `AutoModerator`'s comments from Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/40
// language=CSS
GM_addStyle('shreddit-comment[author="AutoModerator"] {display: none !important;}');
// 2024-08-21 "Hide the «Archived post» warning from Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/41
// language=CSS
GM_addStyle('[slot="post-archived-banner"] {display: none !important;}');
// 2024-08-21 "Hide the «Search Comments» block from Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/42
// language=CSS
GM_addStyle('search-dynamic-id-cache-controller {display: none !important;}');
// 2024-08-21
// 1) "Hide the «Give award» button from Reddit topics": https://github.com/dmitrii-fediuk/vm/issues/43
// 2.1) https://stackoverflow.com/a/75518992
// 2.2) https://stackoverflow.com/a/75571912
// 2.3) https://github.com/violentmonkey/violentmonkey/issues/1852
(function() {
	GM_addElement(document.querySelector('shreddit-post').shadowRoot, 'style', {textContent:
		// language=CSS
		`award-button {display: none !important}`
	});
})();