// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Stack_Exchange.js
// @icon https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon.png
// @match *://*.stackexchange.com/*
// @match *://askubuntu.com/*
// @match *://serverfault.com/*
// @match *://stackexchange.com/*
// @match *://stackoverflow.com/*
// @match *://superuser.com/*
// @name Stack Exchange
// ==/UserScript==
// 2024-12-01 "Improve Stack Exchange": https://github.com/dmitrii-fediuk/vm/issues/71
// language=CSS
GM_addStyle([
	'#search'
	,'.s-navigation'
	,'.s-topbar--logo'
	,'.s-topbar--menu-btn'
	,'li:has(> .js-help-button)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-05-30 "Hide sidebars on Stack Exchange": https://github.com/dmitrii-fediuk/adblock/issues/31
// language=CSS
GM_addStyle('#mainbar {width: 100% !important;}');
// 2024-07-16
// Prevent the header on StackExchange websites from sticking at the top on scrolling the page":
// https://github.com/dmitrii-fediuk/vm/issues/8
// language=CSS
GM_addStyle('header.ps-fixed {position: absolute !important;}');