// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GitHub/common.js
// @icon https://github.com/fluidicon.png
// @match *://github.com/*
// @match *://docs.github.com/*
// @name GitHub / Common
// ==/UserScript==
// 2024-09-20 "Improve the GitHub appearance": https://github.com/dmitrii-fediuk/vm/issues/47
// language=CSS
GM_addStyle([
	'#new_comment_form ~ div:has(a[href$="github-community-guidelines"])'
	,'footer.footer'
	,'td.diff-text-cell > [class*="ActionBar-module__"]' // 2025-04-03
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#repos-sticky-header'
	,'.gh-header-shadow'
	,'.js-sticky'
	,'.position-sticky'
	,':has(> nav)'
	,'[data-testid="issue-metadata-sticky"]'
	,'[style*="-sticky-"]' // 2025-04-03
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;