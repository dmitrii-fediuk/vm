// 2024-05-17
// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addElement
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/reddit.com.js
// @icon https://www.redditstatic.com/shreddit/assets/favicon/192x192.png
// @match *://*.reddit.com/*
// @name Reddit
// ==/UserScript==
// 2025-01-04 "Improve Reddit": https://github.com/dmitrii-fediuk/vm/issues/83
// language=CSS
GM_addStyle([
	'.\\@container:has(> .community-banner)'
	,'community-highlight-carousel'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
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
// language=CSS
GM_addStyle('shreddit-comments-sort-dropdown, shreddit-comments-sort-dropdown > div {margin: 0 !important}');
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
// 1) "How do I hide a DOM element inside a shadow root using Violentmonkey?" https://df.tips/t/2326
// 2) https://stackoverflow.com/a/75518992
// 3) https://stackoverflow.com/a/75571912
// 4) https://github.com/violentmonkey/violentmonkey/issues/1852
let postR = document.querySelector('shreddit-post').shadowRoot;
GM_addElement(postR, 'style', {textContent:
	// 2024-08-21 "Hide the «Give award» button from Reddit topics": https://github.com/dmitrii-fediuk/vm/issues/43
	// language=CSS
	`award-button {display: none !important} `
	// 2024-08-21 "Improve the appearance of Reddit articles": https://github.com/dmitrii-fediuk/vm/issues/37
	+ `div:has(> award-button) {margin: 0 !important}`
});
// 2025-01-04
(() => {
	document.addEventListener('click', (e) => {
		const l = e.target.closest('a[slot="full-post-link"]');
		if (l) {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
			window.open(l.href, '_blank');
		}
	}, true);
})();