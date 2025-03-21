// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GitHub.js
// @icon https://github.com/fluidicon.png
// @match *://github.com/*
// @match *://docs.github.com/*
// @name GitHub
// ==/UserScript==
// 2024-09-20 "Improve the GitHub appearance": https://github.com/dmitrii-fediuk/vm/issues/47
// language=CSS
GM_addStyle([
	'#new_comment_form ~ div:has(a[href$="github-community-guidelines"])'
	,'footer.footer'
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
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;