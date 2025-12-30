// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/common.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork / Common
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		'#user-top-navigation-container .nav-container > [data-cy="header"]'
		,'.air3-banner' // 2025-04-15
		,'.air3-search'
		,'.microapp-slot-innova'
		,'.nav-notifications .nav-dot'
		,'.nav-uma'
		,'.up-skip-nav'
		,'[data-cy="help-menu"]'
		,'[data-test="SaveJob"]'
		// 2025-03-04
		//  1) «Our records indicate that one or more of your payment methods on file
		//  is associated with Russia or Belarus».
		// 2) https://support.upwork.com/hc/en-us/requests/51272840
		,'div:has(> .up-smf [role="alert"] a[href="https://www.upwork.com/nx/payments/deposit-methods"])'
		,'footer.up-footer'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// language=CSS
GM_addStyle([
	'[role="alert"]'
	,'main > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-12-30
// language=CSS
GM_addStyle([
	'*' // 2025-12-30
// language=Javascript
].join(',') + '{letter-spacing: initial !important;}');
// 2024-12-25
// language=CSS
GM_addStyle([
	'header .nav-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'align-items': 'center'
			,'display': 'flex'
			,'flex-wrap': 'wrap'
			// language=Javascript
			,'height': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container header > [class^="nav-v"] {height: auto !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container .nav-item-label {padding-bottom: 0 !important; padding-top: 0 !important;}');