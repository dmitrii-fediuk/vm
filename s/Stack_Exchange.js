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
	,'#sidebar'
	,'.aside-cta:has(a[href="/questions/ask"])'
	,'.bottom-notice'
	,'.s-navigation'
	,'.s-topbar--logo'
	,'.s-topbar--menu-btn'
	,'.s-topbar--skip-link'
	,'footer'
	,'li:has(> .js-help-button)'
	,'li:has(> .js-site-switcher-button)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#post-editor'
	,'#wmd-preview'
	,'#your-answer-header'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle([
	'.form-submit'
	,'.post-layout--right'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// language=CSS
GM_addStyle('body {padding: 0 0 1rem 0;}');
// language=CSS
GM_addStyle('#content {padding: 0 1rem !important;}');
// 2024-05-30 "Hide sidebars on Stack Exchange": https://github.com/dmitrii-fediuk/adblock/issues/31
// language=CSS
GM_addStyle('#mainbar {width: 100% !important;}');
// language=CSS
GM_addStyle([
	'header.ps-fixed'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'border': 0
			,'display': 'initial'
			,'left': 'initial'
			// 2024-07-16
			// Prevent the header on StackExchange websites from sticking at the top on scrolling the page":
			// https://github.com/dmitrii-fediuk/vm/issues/8
			,'position': 'absolute'
			,'right': 0
			// language=Javascript
			,'top': '6em'
			,'width': '18em'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
GM_addStyle([
	'.s-topbar--container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'max-width': 'initial', 'width': 'initial'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);